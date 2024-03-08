function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "dave";
    var real_password = "1234";

    if(username === "" || password === "") {
        document.getElementById(error).innerHTML ="All textboxes are required";
   }

else {
    if (username === real_username && password === real_password) {
        document.getElementById("error").innerHTML = "Welcome" + username;
 }

 else{
    document.getElementById("error").innerHTML = "invalid username or password";
 }
}
}
function forgot() {
    alert("You click the button");
}