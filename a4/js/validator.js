function isValid() {
    if (firstName(),
        lastName(),
        email(),
        phone(),
        password()
    )
    return true;
    else
        document.getElementById("submiterror").innerHTML = "<p><strong>Error Submitting — See Above</strong></p>";
        event.preventDefault();
        return false;
};

FirstName.addEventListener('blur', firstName, false);
function firstName(){
    //1) Create variable
    var validFirstname=false;

    //2) read value from HTML
    var firstname = document.getElementById("FirstName").value;
    var errorMessages = "";

    //3) Do validation
    if (firstname==="null" || firstname==="" || firstname.length > 20 ) {
        errorMessages += "<p>The first name is required and cannot be greater than 50 characters</p>";
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            errorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                validFirstname = true;
                console.log("First name valid")
        };

    //4) Send error message to HTML
    document.getElementById("fname").innerHTML = errorMessages;

    //5) return status of each field
    return (validFirstname);
};

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
    var userEmail = document.getElementById("Email").value;
    var EmailerrorMessage = "";

    //3)Do validation
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        EmailerrorMessage = "<p>You can only have one @ and period for your email</p>";
        console.log("Email invalid.");
    } else{
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
    var userPhone = document.getElementByID("Phone").value;
    var PhoneerrorMessage = "";

    //3)Do validation
    if (isNaN(userPhone) || userPhone.length > 15 || userPhone===null || userPhone === ""){
        PhoneerrorMessage = "<p>Invalid phone number.</p>";
        console.log("Phone invalid");
        validPhone = false;
    } else{
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
    var userPassword = document.getElementByID("Password").value;
    var Passworderrormessage = "";

    //3)Do validation
    if (isNaN(userPassword) || userPassword.length > 7 || userPassword === ""){
        Passworderrormessage = "<p>Invalid password. Must be no more than 7 characters.</p>";
        console.log("Password invalid");
    } else{
        validPassword = true;
        console.log("Password valid");
    }

    //4) Send error message to HTML
    document.getElementByID("password").innerHTML = PassworderrorMessage;

    //5) Return status
    return (validPassword);
};

Username.addEventListener('blur', Username, false);
function username(){
    //1) Create variable
    var validUsername = false;

    //2)Read HTML value
    var Username = document.getElementByID("Username").value;
    var Usernameerror = ""

    //3) Do validation
    if (isNaN(Username) || Username.length > 12 || Username == ""){
        Usernameerror = "<p>Invalid username. It is required and must be no more than 12 characters.</p>";
        console.log("Username invalid");
    } else{
        validUsername = true
        console.log("Username valid");
    }

    //4) Send error message to HTML
    document.getElementByID("username").innerHTML = Usernameerror;

    //5) Return status
    return (validUsername);
}
