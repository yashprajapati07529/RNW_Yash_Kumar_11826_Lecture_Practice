document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Form data collect karna
    const email = document.querySelector('input[type="email"]').value;

    // Ek simple alert dikhana
    alert(`Thank you for signing up with ${email}!`);

    // Yaha aap backend API call add kar sakte hain
});
