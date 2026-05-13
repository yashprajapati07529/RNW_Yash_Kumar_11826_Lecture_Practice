

function DisplayCart(){

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        console.log(cart);

        let container = document.getElementById("cart")

        let total = 0;

        if(cart.length === 0){
            container.innerHTML = "<h3>Cart is Empty</h3>"
            document.getElementById("total").innerText = ""
            return;
        }

        container.innerHTML = "";

        cart.forEach((item , index) => {

            total += item.price

            container.innerHTML += `
            
            <tr>
                <td>${index + 1}</td>
                <td><img src=${item.images} alt="image" class="cartImage"/></td>
                <td><h2>${item.title}</h2></td>
                <td><p>${item.price}</p></td>
                <td><span>${item.quantity}</span></td>
                <td>
                    <button onclick="removeCart(${index})">Delete</button>
                </td>
            </tr>
            
            
            `
        })
    }

DisplayCart()

function removeCart(index){
    let cart = JSON.parse(localStorage.getItem("cart") || [])

    cart.splice(index , 1)


    localStorage.setItem("cart" , JSON.stringify(cart))

    DisplayCart()
}