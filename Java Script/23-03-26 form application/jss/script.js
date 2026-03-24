
function validateForm() {

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let numberError = document.getElementById("numberError");
    let fathernameError = document.getElementById("fathernameError");
    let mothernameError = document.getElementById("mothernameError");

    let isValid = true;

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const number = document.getElementById("number").value.trim()
    const fathername = document.getElementById("fathername").value.trim()
    const mothername = document.getElementById("mothername").value.trim()

    if (name == "") {
        nameError.innerText = "Please enter your name."
        isValid = false
    }


    if (fathername == "") {
        fathernameError.innerText = "Please enter your Father name."
        isValid = false
    }


    if (mothername == "") {
        mothernameError.innerText = "Please enter your Mother name."
        isValid = false
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    if (email == "") {
        emailError.innerText = "Please Enter your email Id."

        isValid = false
    } else if (!email.match(emailPattern)) {
        emailError.innerText = "Please Enter valid email Id."
        isValid = false
    }

    const mobilePattern = /^[6-9]\d{9}$/;

    if (number === "") {
        numberError.innerText = "Enter your Mobile No.";
        isValid = false;
    }

    else if (!mobilePattern.test(number)) {
        numberError.innerText = "Enter a valid 10-digit Mobile No.";
        isValid = false;
    }

    console.log({ email: email, name: name, number: number, fathername: fathername, mothername: mothername });


    return isValid;

}
