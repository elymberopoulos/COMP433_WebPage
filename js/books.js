// var ourRequest = new XMLHttpRequest();
// ourRequest.open('GET', 'http://localhost:8081/book');
// ourRequest.onload = function() {
//   if (ourRequest.status >= 200 && ourRequest.status < 400) {
//     var data = JSON.parse(ourRequest.responseText);
//     createHTML(booksdata);
//   } else {
//     console.log("We connected to the server, but it returned an error.");
//   }
// };

// ourRequest.onerror = function() {
//   console.log("Connection error");
// };

// ourRequest.send();


// function createHTML(booksData) {
//   var rawTemplate = document.getElementById("booksTemplate").innerHTML;
//   var compiledTemplate = Handlebars.compile(rawTemplate);
//   var ourGeneratedHTML = compiledTemplate(booksData);

//   var bookContainer = document.getElementById("books-container");
//   booksContainer.innerHTML = ourGeneratedHTML;
// }
$(document).ready(function () {
  console.log("ready")
  //extract whatever is inside of the script tag with an id of employee-modal-template
  var source = $("#book-modal-template").html();

  var book_modal_template = Handlebars.compile(source);

  var bookResourceURI= "http://localhost:8081/book/"

  //retrieve all the employees from server then display them on the homepage
  // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
  $.getJSON(bookResourceURI, function (books) {
      console.log(books);
      for (var i = 0; i < books.length; i++) {

          var bookData = {
                  productName: "" + books[i].productName,
                  productPrice: "" + books[i].productPrice,
                  productOwner: "" + books[i].productOwner,
                  productReview: "" + books[i].productReview,
                  author: "" + books[i].author,
                  isbn: "" + books[i].isbn,
                  profileLink: "" + books[i].link[0].url
          };
          //replace all the variables within the compiled script tag above with each value of customer data.
          var bookElementToAppend = book_modal_template(bookData);

          //embed the html element which contains customer information into the html div tag with id 'content'
          $("#content").append(bookElementToAppend);

      }

  });
})
