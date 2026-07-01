// =========================================================================
// 1. DATA STORAGE (LocalStorage integrated)
// =========================================================================
let categories = JSON.parse(localStorage.getItem('billing_categories')) || ['Electronics', 'Grocery', 'Clothing'];
let products = JSON.parse(localStorage.getItem('billing_products')) || [
    
];
let cart = JSON.parse(localStorage.getItem('billing_cart')) || [];

function saveToLocalStorage() {
    localStorage.setItem('billing_categories', JSON.stringify(categories));
    localStorage.setItem('billing_products', JSON.stringify(products));
    localStorage.setItem('billing_cart', JSON.stringify(cart));
}

// =========================================================================
// 2. DOM ELEMENTS SELECTORS
// =========================================================================
const categoryForm = document.getElementById('categoryForm');
const productForm = document.getElementById('productForm');
const productCategorySelect = document.getElementById('productCategory');
const masterProductTableBody = document.getElementById('masterProductTableBody');
const cartTableBody = document.getElementById('cartTableBody');
const generateBillBtn = document.getElementById('generateBillBtn');

// Billing Table Inputs & Displays
const directItemName = document.getElementById('directItemName');
const directItemPrice = document.getElementById('directItemPrice');
const directItemQty = document.getElementById('directItemQty');
const directAddBtn = document.getElementById('directAddBtn');

const custName = document.getElementById('custName');
const custMobile = document.getElementById('custMobile');
const billDiscount = document.getElementById('billDiscount');
const billGST = document.getElementById('billGST');
const paymentMethod = document.getElementById('paymentMethod');

// Displays
const displaySubTotal = document.getElementById('displaySubTotal');
const displayDiscount = document.getElementById('displayDiscount');
const displayGstAmount = document.getElementById('displayGstAmount');
const cartGrandTotal = document.getElementById('cartGrandTotal');

// =========================================================================
// 3. MASTER INTERFACE HANDLERS
// =========================================================================
function updateMasterUI() {
    productCategorySelect.innerHTML = '';
    categories.forEach(cat => {
        let option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        productCategorySelect.appendChild(option);
    });

    masterProductTableBody.innerHTML = '';
    products.forEach(prod => {
        let row = `<tr style="cursor: pointer;" onclick="selectProductFromMaster('${prod.name}', ${prod.price})">
            <td><strong>${prod.name}</strong> <small class="text-muted">(${prod.category})</small></td>
            <td>₹${prod.price}</td>
        </tr>`;
        masterProductTableBody.innerHTML += row;
    });
}

function selectProductFromMaster(name, price) {
    directItemName.value = name;
    directItemPrice.value = price;
    directItemQty.value = '1';
    directItemQty.focus();
}

// Master Submissions
categoryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const catName = document.getElementById('categoryName').value.trim();
    if(catName && !categories.includes(catName)) {
        categories.push(catName);
        saveToLocalStorage();
        updateMasterUI();
        categoryForm.reset();
    }
});

productForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = productCategorySelect.value;

    if(name && price > 0 && category) {
        products.push({ id: Date.now(), name: name, price: price, category: category });
        saveToLocalStorage();
        updateMasterUI();
        productForm.reset();
    }
});

// =========================================================================
// 4. LIVE CUSTOMER BILLING CART & CALCULATION LOGIC
// =========================================================================
directAddBtn.addEventListener('click', function() {
    const name = directItemName.value.trim();
    const price = parseFloat(directItemPrice.value);
    const qty = parseInt(directItemQty.value);

    if(!name || isNaN(price) || price < 0 || isNaN(qty) || qty <= 0) {
        alert('Kripya valid Item details fill karein!');
        return;
    }

    const existingItem = cart.find(item => item.productName.toLowerCase() === name.toLowerCase());
    if(existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ productName: name, price: price, qty: qty });
    }

    saveToLocalStorage();
    directItemName.value = '';
    directItemPrice.value = '';
    directItemQty.value = '1';
    directItemName.focus();

    renderCart();
});

// Live screen par values calculate karne ka core logic
function renderCart() {
    cartTableBody.innerHTML = '';
    let subTotal = 0;

    cart.forEach((item, index) => {
        let total = item.price * item.qty;
        subTotal += total;

        let row = `<tr>
            <td><strong>${item.productName}</strong></td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.qty}</td>
            <td>₹${total.toFixed(2)}</td>
            <td><button class="btn btn-danger btn-sm py-1 px-2" onclick="removeFromCart(${index})">×</button></td>
        </tr>`;
        cartTableBody.innerHTML += row;
    });

    // Discount aur Tax calculations
    let discountVal = parseFloat(billDiscount.value) || 0;
    let gstPercent = parseFloat(billGST.value) || 0;
    
    let postDiscountTotal = subTotal - discountVal;
    if(postDiscountTotal < 0) postDiscountTotal = 0;

    let gstAmount = (postDiscountTotal * gstPercent) / 100;
    let finalGrandTotal = postDiscountTotal + gstAmount;

    // Screen display updates
    displaySubTotal.textContent = subTotal.toFixed(2);
    displayDiscount.textContent = discountVal.toFixed(2);
    displayGstAmount.textContent = gstAmount.toFixed(2);
    cartGrandTotal.textContent = finalGrandTotal.toFixed(2);
}

// Jab bhi discount ya GST value badle, live screen calculate karein
billDiscount.addEventListener('input', renderCart);
billGST.addEventListener('input', renderCart);

function removeFromCart(index) {
    cart.splice(index, 1);
    saveToLocalStorage();
    renderCart();
}

// =========================================================================
// 5. PRINT INVOICE GENERATOR TRIGGER
// =========================================================================
generateBillBtn.addEventListener('click', function() {
    if(cart.length === 0) {
        alert('Cart khali hai! Pehle items add kijiye.');
        return;
    }

    const billItemsBody = document.getElementById('billItemsBody');
    billItemsBody.innerHTML = '';
    let subTotal = 0;

    cart.forEach(item => {
        let amt = item.price * item.qty;
        subTotal += amt;

        let row = `<tr>
            <td><strong>${item.productName}</strong></td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.qty}</td>
            <td>₹${amt.toFixed(2)}</td>
        </tr>`;
        billItemsBody.innerHTML += row;
    });

    // Calculations for bill printing
    let discountVal = parseFloat(billDiscount.value) || 0;
    let gstPercent = parseFloat(billGST.value) || 0;
    let postDiscountTotal = subTotal - discountVal;
    if(postDiscountTotal < 0) postDiscountTotal = 0;
    let gstAmount = (postDiscountTotal * gstPercent) / 100;
    let finalGrandTotal = postDiscountTotal + gstAmount;

    // Customer metadata map to printer element
    document.getElementById('printCustName').textContent = custName.value.trim() || 'Walk-in Customer';
    document.getElementById('printCustMobile').textContent = custMobile.value.trim() || 'N/A';
    document.getElementById('printPayMethod').textContent = paymentMethod.value;

    document.getElementById('printSubTotal').textContent = subTotal.toFixed(2);
    document.getElementById('printDiscount').textContent = discountVal.toFixed(2);
    document.getElementById('printGstAmount').textContent = gstAmount.toFixed(2);
    
    // Sabhi elements jo billGrandTotal class/id me hain unko assign karein
    const grandTotalElements = document.querySelectorAll('[id="billGrandTotal"]');
    grandTotalElements.forEach(el => el.textContent = finalGrandTotal.toFixed(2));

    document.getElementById('billDate').textContent = new Date().toLocaleDateString();
    document.getElementById('billNumber').textContent = Math.floor(10000 + Math.random() * 90000);

    // Call Print Window
    window.print();
    
    // Flush data post printing
    cart = [];
    custName.value = '';
    custMobile.value = '';
    billDiscount.value = '0';
    saveToLocalStorage();
    renderCart();
});

// Initial Fire
updateMasterUI();
renderCart();
