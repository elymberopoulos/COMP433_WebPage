// $(document).ready(function () {
//
// //extract whatever is inside of the script tag with an id of employee-modal-template
// var source = $("#customer-modal-template").html();
//
// var customer_modal_template = Handlebars.compile(source);
//
// var customerResourceURI= "http://localhost:8081/customer"
// //http://localhost:8081/partner
//
// //retrieve all the employees from server then display them on the homepage
// // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
// $.getJSON(customerResourceURI, function (customer) {
//
// for (var i = 0; i < customer.length; i++) {
//
// var customerData = {
//     userID: ""+customer[i].userID,
//     customerName: ""+customer[i].firstName + " " + customer[i].lastName,
//     companyName: ""+customer[i].companyName,
// };
//
// //replace all the variables within the compiled script tag above with each value of employee data.
// var customerElementToAppend = customer_modal_template(customerData);
//
// //embed the html element which contains employee information into the html div tag with id 'content'
// $("#content").append(customerElementToAppend);
//
// }
// });


$(document).ready(function () {

    function userInfo() {
        var source = $("#customer-modal-template").html();
        var customer_modal_template = Handlebars.compile(source);
        var customerResourceURI = "http://localhost:8081/customer"
        console.log(customerResourceURI);
        $.ajax({
            method: "GET",
            url: customerResourceURI,
            success: function (customer) {

                for var customerData = {
                        userID: ""+customer[i].userID,
                        customerName: ""+customer[i].firstName + " " + customer[i].lastName,
                        companyName: ""+customer[i].companyName,
                        address: ""+customer[i].address,
                        phoneNumber: ""+customer[i].phoneNumber,
                        email: ""+customer[i].email
                    };

                    var customerElementToAppend = customer_modal_template(customerData);
                    $("#customerTemplate").append(customerElementToAppend);
    }
});
