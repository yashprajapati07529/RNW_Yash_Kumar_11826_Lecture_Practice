const logList = document.getElementById("login-log");

function loginStep(time, message, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject("❌ Invalid Username or Password!");
            } else {
                logList.innerHTML += `<li>${message}</li>`;
                resolve();
            }
        }, time);
    });
}

async function handleLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    logList.innerHTML = "<li>Attempting to login...</li>";

    try {
        // Step 1: Backend se connect hona
        await loginStep(1000, "🔗 Connecting to server...");

        // Step 2: Credentials check karna
        if (user === "admin" && pass === "1234") {
            await loginStep(1500, "🔑 Verifying credentials...");
            await loginStep(1500, "👤 Fetching profile data...");
            await loginStep(1000, "✅ Login Successful! Welcome back.");
        } else {
            // Agar galat info hai toh error throw karna
            await loginStep(1500, "", true);
        }
    } catch (error) {
        logList.innerHTML += `<li style="color: red;">${error}</li>`;
    }
}
