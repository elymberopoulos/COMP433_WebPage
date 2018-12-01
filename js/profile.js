var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'http://localhost:8081/');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();


function createHTML(profileData) {
  var rawTemplate = document.getElementById("profileTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(profileData);

  var profileContainer = document.getElementById("profile-container");
  profileContainer.innerHTML = ourGeneratedHTML;
}
