// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'http://localhost:8081/');
// ourRequest.onload = function() {
//   if (ourRequest.status >= 200 && ourRequest.status < 400) {
//     var data = JSON.parse(ourRequest.responseText);
//     createHTML(data);
//   } else {
//     console.log("We connected to the server, but it returned an error.");
//   }
// };

// ourRequest.onerror = function() {
//   console.log("Connection error");
// };

// ourRequest.send();


// function createHTML(profileData) {
//   var rawTemplate = document.getElementById("profileTemplate").innerHTML;
//   var compiledTemplate = Handlebars.compile(rawTemplate);
//   var ourGeneratedHTML = compiledTemplate(profileData);

//   var profileContainer = document.getElementById("profile-container");
//   profileContainer.innerHTML = ourGeneratedHTML;
// }

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
