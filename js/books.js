var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:8081/book');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(booksdata);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();


function createHTML(booksData) {
  var rawTemplate = document.getElementById("booksTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(booksData);

  var bookContainer = document.getElementById("books-container");
  booksContainer.innerHTML = ourGeneratedHTML;
}
