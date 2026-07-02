let categories = JSON.parse(localStorage.getItem('billing_categories')) || [];
let masterProducts = JSON.parse(localStorage.getItem('billing_products')) || [];
let savedInvoices = JSON.parse(localStorage.getItem('billing_invoices')) || [];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
    updateCategoryDropdowns();
    renderMasterProducts();
    renderInvoiceHistory();
});

// 1. ADD CATEGORY
document.getElementById('categoryForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nameInput = document.getElementById('catName');
    const catName = nameInput.value.trim();

    if (categories.includes(catName)) {
        alert("Category already exists!");
        return;
    }

    categories.push(catName);
    localStorage.setItem('billing_categories', JSON.stringify(categories));
    nameInput.value = '';
    updateCategoryDropdowns();
});

function updateCategoryDropdowns() {
    const prodCatDropdown = document.getElementById('prodCategory');
    const filterCatDropdown = document.getElementById('filterCategory');

    prodCatDropdown.innerHTML = '<option value="">Select Category</option>';
    filterCatDropdown.innerHTML = '<option value="all">All Categories</option>';

    categories.forEach(cat => {
        prodCatDropdown.add(new Option(cat, cat));
        filterCatDropdown.add(new Option(cat, cat));
    });
}

// 2. ADD PRODUCT MASTER WITH GST
document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const category = document.getElementById('prodCategory').value;
    const name = document.getElementById('prodName').value.trim();
    const price = parseFloat(document.getElementById('prodPrice').value);
    const gstRate = parseInt(document.getElementById('prodGst').value);

    masterProducts.push({ id: Date.now(), category, name, price, gstRate });
    localStorage.setItem('billing_products', JSON.stringify(masterProducts));

    document.getElementById('prodName').value = '';
    document.getElementById('prodPrice').value = '';
    renderMasterProducts();
});

// 3. RENDER MASTER LIST
function renderMasterProducts() {
    const container = document.getElementById('masterProductList');
    const filter = document.getElementById('filterCategory').value;
    container.innerHTML = '';

    const filtered = filter === 'all' ? masterProducts : masterProducts.filter(p => p.category === filter);

    if (filtered.length === 0) {
        container.innerHTML = '<p style="color:#999; font-size:12px;">No products available.</p>';
        return;
    }

    filtered.forEach(prod => {
        const chip = document.createElement('div');
        chip.className = 'prod-chip';
        // प्रोडक्ट चिप पर बेस प्राइस और उसका GST % दिखेगा
        chip.innerHTML = prod.name + ' <span>₹' + prod.price.toFixed(2) + ' (' + (prod.gstRate || 0) + '% GST)</span>';
        chip.onclick = () => addToCart(prod);
        container.appendChild(chip);
    });
}

// 4. LIVE CART LOGIC WITH GST BREAKUP
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            gstRate: product.gstRate || 0,
            qty: 1
        });
    }
    renderCart();
}

function updateCartQty(id, newQty) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.qty = parseInt(newQty) || 1;
        if (item.qty < 1) item.qty = 1;
    }
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
}

function renderCart() {
    const tbody = document.getElementById('cartBody');
    tbody.innerHTML = '';

    let totalSubtotal = 0;
    let totalGstAmt = 0;

    cart.forEach(item => {
        const itemBaseTotal = item.price * item.qty;
        const itemGstAmt = itemBaseTotal * (item.gstRate / 100);
        const itemFinalTotal = itemBaseTotal + itemGstAmt;

        totalSubtotal += itemBaseTotal;
        totalGstAmt += itemGstAmt;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td><span style="font-size:12px; background:#eee; padding:2px 6px; border-radius:3px;">${item.category || 'General'}</span></td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.gstRate}%</td>
            <td><input type="number" value="${item.qty}" min="1" style="width:60px; margin:0;" onchange="updateCartQty(${item.id}, this.value)"></td>
            <td>₹${itemFinalTotal.toFixed(2)}</td>
            <td><button type="button" class="btn btn-danger" onclick="removeFromCart(${item.id})">Remove</button></td>
        `;
        tbody.appendChild(row);
    });

    // CGST और SGST हमेशा टोटल GST का आधा-आधा (50% - 50%) होता है
    const cgst = totalGstAmt / 2;
    const sgst = totalGstAmt / 2;
    const finalTotalAmount = totalSubtotal + totalGstAmt;

    document.getElementById('subtotal').textContent = totalSubtotal.toFixed(2);
    document.getElementById('cgst').textContent = cgst.toFixed(2);
    document.getElementById('sgst').textContent = sgst.toFixed(2);
    document.getElementById('tax').textContent = totalGstAmt.toFixed(2);
    document.getElementById('total').textContent = finalTotalAmount.toFixed(2);
}

// 5. UPI SCANNER POPUP
function toggleUPIScanner(show) {
    const currentTotal = document.getElementById('total').textContent;
    if (show && parseFloat(currentTotal) > 0) {
        document.getElementById('modalTotal').textContent = currentTotal;
        document.getElementById('qrImage').src = 'https://qrserver.com' + currentTotal + '%26cu=INR';
        document.getElementById('upiModal').style.display = 'flex';
    } else if (show && parseFloat(currentTotal) <= 0) {
        alert("Please add items to cart first!");
        document.querySelector('input[name="paymentMethod"][value="Cash"]').checked = true;
    }
}

function closeModal() {
    document.getElementById('upiModal').style.display = 'none';
}

// 6. GENERATE & SAVE INVOICE
document.getElementById('billingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("Your customer cart is empty!");
        return;
    }

    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

    const subtotal = document.getElementById('subtotal').textContent;
    const cgst = document.getElementById('cgst').textContent;
    const sgst = document.getElementById('sgst').textContent;
    const tax = document.getElementById('tax').textContent;
    const total = document.getElementById('total').textContent;

    const editingId = document.getElementById('editingInvoiceId').value;
    let invoiceId;

    if (editingId) {
        invoiceId = editingId;
        savedInvoices = savedInvoices.filter(inv => inv.invoiceId !== editingId);
    } else {
        invoiceId = 'INV-' + Date.now();
    }

    const invoice = {
        invoiceId: invoiceId,
        customer: { name: name, phone: phone },
        items: [...cart],
        paymentMethod: paymentMethod,
        summary: { subtotal: subtotal, cgst: cgst, sgst: sgst, tax: tax, total: total },
        date: new Date().toLocaleString()
    };

    savedInvoices.push(invoice);
    localStorage.setItem('billing_invoices', JSON.stringify(savedInvoices));

    // प्रिंट ट्रिगर
    printInvoiceAction(invoice);

    // फॉर्म रीसेट
    cart = [];
    renderCart();
    this.reset();
    document.getElementById('editingInvoiceId').value = "";
    document.getElementById('submitBtn').textContent = "Generate & Save Invoice";
    document.getElementById('submitBtn').className = "btn btn-primary btn-large";

    renderInvoiceHistory();
});

// 7. RENDER HISTORY
function renderInvoiceHistory() {
    const list = document.getElementById('invoiceHistoryList');
    list.innerHTML = '';

    if (savedInvoices.length === 0) {
        list.innerHTML = '<p style="color:#999; font-size:13px;">No history logged yet.</p>';
        return;
    }

    [...savedInvoices].reverse().forEach(inv => {
        const div = document.createElement('div');
        div.className = 'invoice-log-item';
        div.innerHTML = `
            <div>
                <strong>${inv.invoiceId}</strong> - ${inv.customer.name} (${inv.customer.phone})<br>
                <small>${inv.date} | Mode: <b>${inv.paymentMethod}</b></small>
                <div class="action-buttons">
                    <button type="button" class="btn btn-info" onclick="reprintInvoice('${inv.invoiceId}')">🖨️ Print</button>
                    <button type="button" class="btn btn-warning" onclick="editInvoice('${inv.invoiceId}')">✏️ Edit</button>
                    <button type="button" class="btn btn-danger" style="padding: 5px 10px; font-size:12px;" onclick="deleteInvoice('${inv.invoiceId}')">🗑️ Delete</button>
                </div>
            </div>
            <div style="text-align:right;">
                <div style="font-weight:bold; color:#321fdb; margin-bottom:5px;">₹${inv.summary.total}</div>
            </div>
        `;
        list.appendChild(div);
    });
}

function reprintInvoice(id) {
    const inv = savedInvoices.find(i => i.invoiceId === id);
    if (inv) printInvoiceAction(inv);
}

// ==========================================
// 7.2 REPRINT INVOICE FROM HISTORY
// ==========================================
function reprintInvoice(id) {
    const inv = savedInvoices.find(i => i.invoiceId === id);
    if(inv) printInvoiceAction(inv);
}

// ==========================================
// 7.3 EDIT INVOICE LOGIC (FULL CODE)
// ==========================================
function editInvoice(id) {
    // सेव किए गए बिलों में से इनवॉइस खोजना
    const inv = savedInvoices.find(i => i.invoiceId === id);
    if(!inv) return;

    // कस्टमर की जानकारी को वापस फॉर्म इनपुट में लोड करना
    document.getElementById('custName').value = inv.customer.name;
    document.getElementById('custPhone').value = inv.customer.phone;
    
    // हिडन इनपुट फील्ड में करंट इनवॉइस आईडी सेट करना (ताकि अपडेट करते समय नया बिल न बने)
    document.getElementById('editingInvoiceId').value = inv.invoiceId;

    // पुराने पेमेंट मोड वाले रेडियो बटन को ऑटो-सेलेक्ट करना
    const paymentRadio = document.querySelector(`input[name="paymentMethod"][value="${inv.paymentMethod}"]`);
    if(paymentRadio) paymentRadio.checked = true;

    // इनवॉइस के सभी आइटम्स को वापस लाइव कार्ट (Cart Array) में लोड करना
    cart = [...inv.items];
    
    // लाइव कार्ट टेबल और कैलकुलेशन को रिफ्रेश करना
    renderCart();

    // सबमिट बटन का टेक्स्ट और डिज़ाइन बदलकर अलर्ट मोड में करना
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.textContent = "⚡ Update & Print Saved Invoice";
    submitBtn.className = "btn btn-warning btn-large";

    // पेज को स्मूथ स्क्रॉल करके सबसे ऊपर (लाइव कार्ट फॉर्म पर) ले जाना
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 7.4 DELETE INVOICE WITH LOCALSTORAGE SYNC
// ==========================================
function deleteInvoice(id) {
    if(confirm("Are you sure you want to delete this invoice from history and LocalStorage?")) {
        // ऐरे में से इस आईडी वाले बिल को हटाना
        savedInvoices = savedInvoices.filter(inv => inv.invoiceId !== id);
        
        // लोकल स्टोरेज को तुरंत अपडेट (सिंक) करना ताकि डेटा हमेशा के लिए मिट जाए
        localStorage.setItem('billing_invoices', JSON.stringify(savedInvoices));
        
        // स्क्रीन पर बनी हुई हिस्ट्री लिस्ट को रिफ्रेश करना
        renderInvoiceHistory();
    }
}

// ==========================================
// 8. FIXED & FULL DETAILS GST PRINT WINDOW LOGIC
// ==========================================
function printInvoiceAction(inv) {
    // एक नई ब्लैंक ब्राउज़र प्रिंट विंडो खोलना
    let printWindow = window.open('', '', 'height=700,width=900');
    
    // कार्ट के सारे प्रोडक्ट्स को एक लूप चलाकर पहले ही HTML स्ट्रिंग्स में जोड़ना
    let itemsRowsHtml = '';
    inv.items.forEach(item => {
        const itemBaseTotal = item.price * item.qty;
        const itemGstAmt = itemBaseTotal * (item.gstRate / 100);
        const itemFinalTotal = itemBaseTotal + itemGstAmt;

        itemsRowsHtml += `
            <tr>
                <td>${item.name}</td>
                <td><i>${item.category || 'General'}</i></td>
                <td>₹${parseFloat(item.price).toFixed(2)}</td>
                <td>${item.gstRate}%</td>
                <td>${item.qty}</td>
                <td style="text-align:right;">₹${itemFinalTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    // पूरा व्यवस्थित लीगल टैक्स इनवॉइस HTML स्ट्रक्चर
    let htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Invoice - ${inv.invoiceId}</title>
            <style>
                body { font-family: 'Arial', sans-serif; padding: 30px; color: #333; }
                .bill-header { text-align: center; margin-bottom: 25px; line-height: 1.4; }
                .bill-header h1 { margin: 0; font-size: 26px; color: #222; }
                .details-table { width: 100%; margin-bottom: 20px; font-size: 14px; border-bottom: 2px solid #333; padding-bottom: 10px; }
                .details-table td { padding: 6px 0; }
                .items-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
                .items-table th, .items-table td { border-bottom: 1px solid #ddd; padding: 12px 10px; text-align: left; }
                .items-table th { background-color: #f8f9fa; font-weight: bold; }
                .totals-area { text-align: right; margin-top: 20px; font-size: 15px; line-height: 1.6; }
                .grand-total { font-size: 19px; font-weight: bold; color: #000; margin-top: 5px; border-top: 1px solid #000; padding-top: 5px;}
                .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #777; border-top: 1px dashed #ccc; padding-top: 15px; }
            </style>
        </head>
        <body>
            <div class="bill-header">
                <h1>TAX INVOICE</h1>
                <p><b>Your Store Name</b><br>Main Market Street, New Delhi<br>GSTIN: 07AAAAA1111A1Z1<br>Phone: +91 9876543210</p>
            </div>
            
            <table class="details-table">
                <tr>
                    <td><b>Invoice No:</b> ${inv.invoiceId}</td>
                    <td style="text-align:right;"><b>Date & Time:</b> ${inv.date}</td>
                </tr>
                <tr>
                    <td><b>Customer Name:</b> ${inv.customer.name}</td>
                    <td style="text-align:right;"><b>Contact Number:</b> ${inv.customer.phone}</td>
                </tr>
                <tr>
                    <td><b>Payment Method:</b> <span style="background:#eee; padding:2px 6px; border-radius:3px;"><b>${inv.paymentMethod}</b></span></td>
                    <td></td>
                </tr>
            </table>

            <table class="items-table">
                <thead>
                    <tr>
                        <th>Product Description</th>
                        <th>Category</th>
                        <th>Base Rate (₹)</th>
                        <th>GST Rate</th>
                        <th>Qty</th>
                        <th style="text-align:right;">Net Amount (₹)</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsRowsHtml}
                </tbody>
            </table>

            <div class="totals-area">
                <p>Taxable Subtotal: ₹${inv.summary.subtotal}</p>
                <p>CGST: ₹${inv.summary.cgst || '0.00'}</p>
                <p>SGST: ₹${inv.summary.sgst || '0.00'}</p>
                <p>Total GST Tax Amount: ₹${inv.summary.tax}</p>
                <div class="grand-total">Grand Total (Incl. GST): ₹${inv.summary.total}</div>
            </div>

            <div class="footer">
                <p>Thank You For Your Visit! Please Come Again.</p>
                <p><small>Powered by Advance GST Local Billing POS</small></p>
            </div>
        </body>
        </html>
    `;

    // नई विंडो में HTML कंटेंट लोड करना
    printWindow.document.write(htmlContent);
    printWindow.document.close();
    printWindow.focus();
    
    // ब्राउज़र एलिमेंट्स और स्टाइल को पूरी तरह लोड करने के लिए 0.5 सेकंड का डिले, फिर प्रिंटर पॉपअप कमांड चालू होगी
    setTimeout(() => { 
        printWindow.print(); 
    }, 500);
}
