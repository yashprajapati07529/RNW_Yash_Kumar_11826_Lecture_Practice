// let isRestaurantOpen = true;

// function order(time, work) {
//     return new Promise((resolve, reject) => {
//         if (isRestaurantOpen) {
//             setTimeout(() => {
//                 console.log(work);
//                 resolve()
//             }, time)
//         } else {
//             reject("Restaurant is closed.")
//         }
//     })
// }

// async function placeOrder() {
//     try {
//         await order(2000, "Order Received.")
//         await order(3000, "Food is being prepared.")
//         await order(4000, "Food is ready.")
//         await order(3000, "Order Delivered.")
//     } catch (err) {
//         console.log(err);

//     }
// }

// placeOrder()


let isCardValid = true;
const displayList = document.getElementById("display");

function processStep(time, work) {
    return new Promise((resolve, reject) => {
        if (isCardValid) {
            setTimeout(() => {

                displayList.innerHTML += `<li>${work}</li>`;
                resolve();
            }, time);
        } else {
            reject("❌ Payment Failed: Invalid Card.");
        }
    });
}

async function startCheckout() {
    displayList.innerHTML = "<li>--- Checkout Started ---</li>";

    try {
        await processStep(1500, "🔍 Validating card details...");
        await processStep(2000, "💳 Authorizing transaction...");
        await processStep(2500, "💸 Deducting amount...");
        await processStep(1000, "✅ Payment Successful!");
    } catch (err) {
        displayList.innerHTML += `<li style="color: red;">${err}</li>`;
    }
}


startCheckout();

