function send(){
    var emailAdd = document.getElementById("emailAddress").value;
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    if(!email_val.test(emailAdd)){
        alert('Invalid email format please enter valid email id');
    }
}