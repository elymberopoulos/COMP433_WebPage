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
    var partnerLogin = document.getElementById("partnerLogin").addEventListener("click", partnerLogin);
    console.log(document.cookie);

    function userLogin() {
        var loginURL = getCookieFunction("customerLoginURL");
         var customerResourceURI = loginURL;
        // var customerResourceURI = "http://localhost:8081/customer/" + $('#username').val();
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

    function loginCheck(userID, userPassword) {
        var idAttempt = document.getElementById("username").value;
        var passwordAttempt = document.getElementById("password").value;
        console.log("login check");
        console.log(userID);
        console.log(userPassword);
        console.log(idAttempt);
        console.log(passwordAttempt);
        if (userID === idAttempt && userPassword === passwordAttempt) {
            authenticated = true;
            console.log("Customer login authenticated");
            alert("Welcome " + userID);

            var cookieTest = getCookieFunction("customerID");
            console.log("COOKIE TEST FOR CUSTOMER ID: " + cookieTest);
            console.log("DOCUMENT.COOKIE " + document.cookie);
            document.location.href = "books.html";

        } else {
            console.log("Customer not authenticated");
        }
    }


    function partnerLogin() {
        var partnerLoginURL = getCookieFunction("partnerLoginURL");
        var partnerResourceURI = partnerLoginURL;

        // var partnerResourceURI = "http://localhost:8081/partner/" + $('#username').val();
        console.log(partnerResourceURI);
        $.ajax({
            method: "GET",
            url: partnerResourceURI,
            success: function (data) {
                console.log("hitting partner method");
                // dataReturn = jQuery.getJSON(data);
                // console.log(dataReturn);
                console.log(data);
                partnerID = data.userID;
                partnerPassword = data.partnerPassword;
                firstName = data.firstName;
                lastName = data.lastName;
                console.log(firstName);
                console.log(lastName);
                console.log(userID);
                console.log(partnerPassword);
                console.log("RESULT TEST PARTNER ID: " + partnerID);
                console.log("RESULT TEST PARTNER PASSWORD: " + partnerPassword);
                partnerLoginCheck(partnerID, partnerPassword);

            }

        });
    }

    function partnerLoginCheck(partnerID, partnerPassword) {
        var idAttempt = document.getElementById("username").value;
        var passwordAttempt = document.getElementById("password").value;
        console.log("login check");
        console.log(partnerID);
        console.log(partnerPassword);
        console.log(idAttempt);
        console.log(passwordAttempt);
        if (partnerID === idAttempt && partnerPassword === passwordAttempt) {
            authenticated = true;
            console.log("Partner login authenticated");
            alert("Welcome " + partnerID);

            document.cookie = "partnerID" + "=" + partnerID + ";";

            console.log(document.cookie);
            document.location.href = "addbook.html";
        } else {
            console.log("Partner not authenticated");
        }
    }
});