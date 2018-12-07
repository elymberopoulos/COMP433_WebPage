
$(document).ready(function () {
  console.log("ready")
  //extract whatever is inside of the script tag with an id of employee-modal-template
  var source = $("#customer-modal-template").html();

  var customer_modal_template = Handlebars.compile(source);

  var customerResourceURI= "http://localhost:8081/customer/"
  //http://localhost:8081/partner

  //retrieve all the employees from server then display them on the homepage
  // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
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
})
