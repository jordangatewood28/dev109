function validateForm() {
    if (firstName();
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
}

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var FNerrorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        FNerrorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
        console.log("First name invalid — length");
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            FNerrorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                var validFirstname = true;
                console.log("First name valid");
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = FNerrorMessage;

    //5) return status of each field
    return (validFirstname);
};

LastName.addEventListener('blur', lastName, false);
function lastName(){
    //1) Create variable
    var validLastname=false;

    //2) read value from HTML
    var lastname = document.getElementById("LastName").value;
    var LNerrorMessages = "";

    //3) Do validation
    if (lastname==="null" || lastname==="" || lastname.length > 50 ) {
        LNerrorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
        console.log("Last name invalid — length");
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            LNerrorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters");
        } else {
                var validLastname = true;
                console.log("Last name valid");
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = LNerrorMessages;

    //5) return status of each field
    return (validLastname);
};

Email.addEventListener('blur', userEmail, false);
function email(){
    //1) Create variable
    var validEmail=false;

    //2) Read HTML value
    var userEmail = document.getElementById("email").value;
    var EmailerrorMessage = "";

    //3)Do validation
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        EmailerrorMessage = "<p>You can only have one @ and period for your email</p>";
        console.log("Email invalid.");
    }
    else{
        validEmail = true;
        console.log("Email valid");
    }

    //4) Send error message to HTML
    document.getElementById("email").innerHTML = EmailerrorMessages;

    //5) Return status
    return (validEmail);
};

Phone.addEventListener('blur', userPhone, false);
function phone(){
    //1) Create variable
    var validPhone = false;

    //2) Read HTML value
    var userPhone = document.getElementByID("phone").value;
    var PhoneerrorMessage = "";

    //3)Do validation
    if (isNaN(phone) || phone.length > 15 || phone===null || phone === ""){
        PhoneerrorMessage = "<p>Invalid phone number.</p>";
        console.log("Phone invalid");
        validPhone = false;
    }else{
        validPhone = true;
        console.log("Phone valid");
    };

    //4) Send error message to HTML
    document.getElementById("phone").innerHTML = PhoneerrorMessage;

    //5) Return status
    return (validPhone);
};

Password.addEventListener('blur', userPassword, false);
function password(){
    //1) Create variable
    var validPassword = false;

    //2) Read HTML value
    var userPassword = document.getElementByID("password").value;
    var Passworderrormessage = "";

    //3)Do validation
    if (isNaN(password) || password.length > 7 || password === ""){
        Passworderrormessage = "<p>Invalid password. Must be no more than 7 characters.</p>";
        console.log("Password invalid");
    }else{
        validPassword = true;
        console.log("Password valid");
    }

    //4) Send error message to HTML
    document.getElementByID("password").innerHTML = PassworderrorMessage;

    //5) Return status
    return (validPassword);
};
