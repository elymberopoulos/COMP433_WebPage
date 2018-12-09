// function getCookieFunction(name){
//     var dc = document.cookie;
//     var prefix = name + "=";
//     var begin = dc.indexOf("; " + prefix);
//     if(begin == -1){
//         begin = dc.indexOf(prefix);
//         if(begin != 0) return null;
//     }
//     else{
//         begin += 2;
//         var end = document.cookie.indexOf(";", begin);
//         if(end == -1){
//             end = dc.length;
//         }
//     }
//     return decodeURI(dc.substring(begin + prefix.length, end));
// }
function getCookieFunction(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
     alert("Welcome again " + username);
    } else {
      username = prompt("Please enter your name:", "");
      if (username != "" && username != null) {
        setCookie("username", username, 365);
      }
    }
  }