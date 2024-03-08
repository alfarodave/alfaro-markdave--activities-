function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("name").value;
    var password = document.getElementById("gender").value;
    var password = document.getElementById("password").value;

    if(username === "" || name ==="" || gender ==="" || password ==="")
        document.getElementById("error").innerHTML ="All textboxes are required";

else{
    document.getElementById("error").innerHTML = "Registered Successfully";
}
}
function forgot(){
    alert("You clicked the botton");
}


    