// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var username = document.getElementById("username").value;
// var password = document.getElementById("password").value;
// if ( username == "User123" && password == "User123"){
// alert ("Login successfully");
// window.location = "index.html"; // Redirecting to other page.
// return false;
// }
// else{
// attempt --;// Decrementing by one.
// alert("You have left "+attempt+" attempt;");
// // Disabling fields after 3 attempts.
// if( attempt == 0){
// document.getElementById("username").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }

$(document).ready(function () {
    var userID, passwordAttempt, firstName, lastName;
    var authenticated = false;
    var submitLogin = document.getElementById("submitLogin").addEventListener("click", userLogin);


    function userLogin() {
        var customerResourceURI = "http://localhost:8081/customer/" + $('#username').val();
        console.log(customerResourceURI);
        $.ajax({
            method: "GET",
            url: customerResourceURI,
            success: function (data) {
                console.log("hitting success method");
                // dataReturn = jQuery.getJSON(data);
                // console.log(dataReturn);
                console.log(data);
                userID = data.userID;
                userPassword = data.password;
                firstName = data.firstName;
                lastName = data.lastName;
                console.log(firstName);
                console.log(lastName);
                console.log(userID);
                console.log(userPassword);
                console.log("RESULT TEST USER ID: " + userID);
                console.log("RESULT TEST USER PASSWORD: " + userPassword);
                loginCheck(userID, userPassword);

            }

        });
    }

    function loginCheck(userID, userPassword){
        var idAttempt = document.getElementById("username").value;
        var passwordAttempt = document.getElementById("password").value;
        console.log("login check");
        console.log(userID);
        console.log(userPassword);
        console.log(idAttempt);
        console.log(passwordAttempt);
        if(userID === idAttempt && userPassword === passwordAttempt){
            authenticated = true;  
            console.log("login authenticated");
     
        }
        else{
            console.log("not authenticated");
        }
    }

    function getCustomerPassword() {
        return $("input[name=password]").val();
    }

    function getUserID() {
        return $("input[name=userID]").val();
    }

});