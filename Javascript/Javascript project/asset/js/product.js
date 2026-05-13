/* ProductData */

let allProducts = []

let currentPage = 1

let itemPerPage = 4

async function fetchProduct() {
    try {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        allProducts = data.products;

        filterProducts()
    } catch (err) {
        console.log(err);
    }
}


let searchInput = document.getElementById("search-input")
let sortSelect = document.getElementById("sort-select")

if (searchInput) {
    searchInput.addEventListener("input", () => {

        currentPage = 1;

        filterProducts()
    })
}

if (sortSelect) {
    sortSelect.addEventListener("change", () => {

        currentPage = 1;

        filterProducts()
    })
}

function filterProducts() {

    let query = (searchInput?.value || "").toLowerCase();

    let sort = sortSelect?.value || "default"


    let filtered = allProducts.filter(p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query) || p.description.toLowerCase().includes(query))


    if (sort === "low") {
        filtered.sort((a, b) => a.price - b.price)

    }

    if (sort === "high") {
        filtered.sort((a, b) => b.price - a.price)
    }

    if (sort === "name") {
        filtered.sort((a, b) => a.title.localeCompare(b.title))
    }

    displayPagination(filtered)
}

// Pagination

function displayPagination(products) {

    let start = (currentPage - 1) * itemPerPage
    let end = start + itemPerPage

    let paginatedProducts = products.slice(start, end)

    console.log("paginatedProducts", paginatedProducts);

    ProductContainer(paginatedProducts)

    paginationButton(products)

}


// Pagination Button

function paginationButton(products) {

    let totalPages = Math.ceil(products.length / itemPerPage)

    console.log(totalPages);

    let pagination = document.getElementById("pagination")

    if (!pagination) return;

    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
        
        <button class="btn btn-primary" onclick="changePages(${i})">${i}</button>
        
        `
    }
}

function changePages(page) {
    currentPage = page

    filterProducts()
}


function ProductContainer(product) {

    let AllProductItem = document.getElementById('products')

    let noresult = document.getElementById("no-result")

    if (!AllProductItem) return;

    AllProductItem.innerHTML = "";

    if (products.length === 0) {
        if (noresult) noresult.style.display = "block"
        return;
    }

    if (noresult) noresult.style.display = "none";

    product.forEach((p, index) => {
        AllProductItem.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${p.images[0]}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text text-truncate">${p.description}</p>
                        <p>${p.price}</p>
                        <button href="#" class="btn btn-primary" id="btn" onclick = "addToCart(${p.id})">AddToCart</button>
                    </div>
                </div>
            `
    })
}

function addToCart(id) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = allProducts.find(p => p.id === id)

    console.log(product);

    if (!product) return;

    cart.push(product)

    localStorage.setItem("cart", JSON.stringify(cart))

    alert("Item added to cart")
}

fetchProduct()