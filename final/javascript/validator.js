function isValid() {
    if (firstName(),
        email(),
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
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
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

Email.addEventListener('blur', userEmail, false);
function email(){
    //1) Create variable
    var validEmail=false;

    //2) Read HTML value
    var userEmail = document.getElementById("Email").value;
    var Emailerror = "";

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
    document.getElementById("email").innerHTML = Emailerror;

    //5) Return status
    return (validEmail);
};

Phone.addEventListener('blur', userPhone, false);
function phone(){
    //1) Create variable
    var validPhone = false;

    //2) Read HTML value
    var userPhone = document.getElementByID("Phone").value;
    var Phoneerror = "";

    //3)Do validation
    if (userPhone.length > 15 || userPhone===null || userPhone===""){
        PhoneerrorMessage = "<p>A phone number is required and cannot be more than 15 characters.</p>";
        console.log("Phone invalid");
        validPhone = false;
    } else{
        validPhone = true;
        console.log("Phone valid");
    };

    //4) Send error message to HTML
    document.getElementById("phone").innerHTML = Phoneerror;

    //5) Return status
    return (validPhone);
};
