function validate(){
    var walletID = document.getElementById("walletID").value;
    var emailAdd = document.getElementById("emailAddress").value;
    var psword = document.getElementById("password").value;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    if(!email_val.test(emailAdd)){
        alert('Invalid email format please enter valid email id');
    }
    
}