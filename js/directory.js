// // $(document).ready(function () {
// //
// // //extract whatever is inside of the script tag with an id of employee-modal-template
// // var source = $("#customer-modal-template").html();
// //
// // var customer_modal_template = Handlebars.compile(source);
// //
// // var customerResourceURI= "http://localhost:8081/customer"
// // //http://localhost:8081/partner
// //
// // //retrieve all the employees from server then display them on the homepage
// // // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
// // $.getJSON(customerResourceURI, function (customer) {
// //
// // for (var i = 0; i < customer.length; i++) {
// //
// // var customerData = {
// //     userID: ""+customer[i].userID,
// //     customerName: ""+customer[i].firstName + " " + customer[i].lastName,
// //     companyName: ""+customer[i].companyName,
// // };
// //
// // //replace all the variables within the compiled script tag above with each value of employee data.
// // var customerElementToAppend = customer_modal_template(customerData);
// //
// // //embed the html element which contains employee information into the html div tag with id 'content'
// // $("#content").append(customerElementToAppend);
// //
// // }
// // });

$(document).ready(function () {
    console.log("ready")
    $('#searchButton').bind('click', selectClick);
    //extract whatever is inside of the script tag with an id of employee-modal-template
    var source = $("#customer-modal-template").html();
    var profileSource = $("#customer-modal-profile-template").html();


    var customer_modal_template = Handlebars.compile(source);
    var customer_modal_profile_template = Handlebars.compile(profileSource);


    var customerResourceURI = "http://localhost:8081/customer/"
    //http://localhost:8081/partner

    //retrieve all the employees from server then display them on the homepage
    // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
    function selectClick() {
        $("#content").empty();
        setTimeout(100);
        var searchID = $("input[name=search]");
        if (searchID.val() === "") {
            console.log(searchID);
            loadAll();
        } else {
            outputProfile();
        }
    }

    function loadAll() {
        console.log("loadAll fired");
        $.getJSON(customerResourceURI, function (customers) {
            console.log(customers);
            for (var i = 0; i < customers.length; i++) {

                var customerData = {
                    userID: "" + customers[i].userID,
                    customerName: "" + customers[i].firstName + " " + customers[i].lastName,
                    companyName: "" + customers[i].companyName,
                    address: "" + customers[i].address,
                    phoneNumber: "" + customers[i].phoneNumber,
                    email: "" + customers[i].email,
                    profileLink: "" + customers[i].link[0].url

                };
                //replace all the variables within the compiled script tag above with each value of customer data.
                var customerElementToAppend = customer_modal_template(customerData);

                //embed the html element which contains customer information into the html div tag with id 'content'
                $("#content").append(customerElementToAppend);
            }

        });
    }




    function outputProfile() {
        console.log($("input[name=search]").val());
        var profileURI = customerResourceURI + $("input[name=search]").val()

        $.getJSON(profileURI, function (customers) {
            console.log(customers);
            for (var i = 0; i < customers.length; i++) {

                var customerData = {
                    userID: "" + customers[i].userID,
                    customerName: "" + customers[i].firstName + " " + customers[i].lastName,
                    companyName: "" + customers[i].companyName,
                    address: "" + customers[i].address,
                    phoneNumber: "" + customers[i].phoneNumber,
                    email: "" + customers[i].email,
                    creditCardNumber: "" + customers[i].creditCardNumber
                };
                //replace all the variables within the compiled script tag above with each value of customer data.
                var customerElementToAppend = customer_modal_profile_template(customerData);

                //embed the html element which contains customer information into the html div tag with id 'content'
                $("#profileContent").append(customerElementToAppend);
            }

        });
    }
})