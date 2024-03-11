
function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var address = document.getElementById("address").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var gender = document.getElementById("gender").value;

    if (firstName === "" || !/^[a-zA-Z]+$/.test(firstName) || firstName.length < 6) {
        alert("Please enter a valid first name (minimum 6 characters, alphabets only).");
        return false;
    }

    if (lastName === "" || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Please enter a valid last name (alphabets only).");
        return false;
    }

    if (email === "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password === "" || !/^[a-zA-Z0-9]+$/.test(password) || password.length < 6) {
        alert("Please enter a valid password (minimum 6 characters, alphanumeric only).");
        return false;
    }

    if (address === "") {
        alert("Please enter your address.");
        return false;
    }

    if (mobileNumber === "" || !/^\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid mobile number (10 digits only).");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    alert("Registration Done Successfully");
    return true;
}
