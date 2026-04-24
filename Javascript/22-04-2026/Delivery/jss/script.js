let isOrderValid = true; 
const statusList = document.getElementById("delivery-status");

function trackDelivery(time, status) {
    return new Promise((resolve, reject) => {
        if (isOrderValid) {
            setTimeout(() => {
                // UI par delivery status update karna
                statusList.innerHTML += `<li>${status}</li>`;
                resolve();
            }, time);
        } else {
            reject("⚠️ Delivery Cancelled: Address not found.");
        }
    });
}

async function startDeliveryFlow() {
    try {
        await trackDelivery(1000, "📦 Order is being packed...");
        await trackDelivery(2500, "🚚 Out for pickup - Courier partner assigned.");
        await trackDelivery(3000, "🏢 Arrived at the sorting center.");
        await trackDelivery(4000, "🛵 Out for delivery - Delivery agent is nearby.");
        await trackDelivery(2000, "🏠 **Order Delivered Successfully!**");
    } catch (error) {
        statusList.innerHTML += `<li style="color: red;">${error}</li>`;
    }
}

// Delivery tracking start karein
startDeliveryFlow();
