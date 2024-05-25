function validateForm() {
    if (firstName();
    lastName();
    email();
    phone():
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
        console.log("First name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            FNerrorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("First name invalid — bad characters")
        } else {
                var validFirstname = true;
                console.log("First name valid")
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
        console.log("Last name invalid — length")
        } else if (firstname.match("^[a-zA-Z ,.'-]+$")===null) {
            LNerrorMessages += "<p>Invalid caracter in last name (accepts only A-Z, a-z, and ,.'-)</p>";
            console.log("Last name invalid — bad characters")
        } else {
                var validLastname = true;
                console.log("Last name valid")
        };

    //4) Send error message to HTML
    document.getElementById("lname").innerHTML = LNerrorMessages;

    //5) return status of each field
    return (validLastname);
};

function email(){
    var validEmail=false
    
    var userEmail = document.getElementById("email").value;
    var EmailerrorMessage = "";
    
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
        EmailerrorMessage = "<p>You can only have one @ and period for your email</p>"
        console.log("Email invalid.")
    }
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
    else{
        validEmail = true
        console.log("Email valid")
    }

    document.getElementById("email").innerHTML = EmailerrorMessages;

    return (validEmail);
};

function phone(){
    var validPhone = false

    var userPhone = document.getElementByID("phone").value;
    var PhoneerrorMessage = "";

    if (isNaN(phone) || phone.length > 15 || phone===null || phone ===""){
        PhoneerrorMessage = "<p>Invalid phone number.</p>"
        console.log("Phone invalid")
    }else{
        validPhone = true
        console.log("Phone valid")
    };

    document.getElementById("phone").innerHTML = PhoneerrorMessage;

    return (validPhone);
}
