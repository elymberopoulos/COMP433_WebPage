
$(document).ready(function () {
    console.log("ready")
    //$('#searchButton').bind('click', selectClick);
    //extract whatever is inside of the script tag with an id of employee-modal-template
    var source = $("#customer-modal-template").html();
    //var profileSource = $("#customer-modal-profile-template").html();


    var customer_modal_template = Handlebars.compile(source);
    //var customer_modal_profile_template = Handlebars.compile(profileSource);


    var customerResourceURI = "http://localhost:8081/customer/"
    //http://localhost:8081/partner

    // uriFetch();


    // $.getJSON(customerResourceURI, function (customers) {
    //     console.log(customers);
    //     for (var i = 0; i < customers.length; i++) {

    //         var customerData = {
    //             userID: "" + customers[i].userID,
    //             customerName: "" + customers[i].firstName + " " + customers[i].lastName,
    //             companyName: "" + customers[i].companyName,
    //             address: "" + customers[i].address,
    //             phoneNumber: "" + customers[i].phoneNumber,
    //             email: "" + customers[i].email,
    //             profileLink: "" + customers[i].link[0].url
    //         };
    //         var profileLNK = customers[i].link[0].url;
    //         document.cookie = "customerProfileLNK = " + profileLNK + ";";
    //         //console.log(document.cookie);

    //         //replace all the variables within the compiled script tag above with each value of customer data.
    //         var customerElementToAppend = customer_modal_template(customerData);
    //         var cookieTest = getCookieFunction("customerProfileLNK");
    //         console.log("Cookie Parse Test: " + cookieTest);


    //         //ASYNC AND AWAIT WRAPPED IN A PROMISE 


    //         //embed the html element which contains customer information into the html div tag with id 'content'
    //         $("#content").append(customerElementToAppend);
    //     }


    // });
    // // var cookies = document.cookie;
    // // console.log(cookies);
    function uriFetch() {
        return fetch(customerResourceURI, {
                headers: new Headers({
                    Accept: 'application/json'
                })
            })
            .then(res => res.json());
    }
    async function read() {
        try {
            const uriJSON = await uriFetch();
            console.log(uriJSON);
            console.log(`notes uriJSON successful`);
            for (var i = 0; i < uriJSON.length; i++) {
                console.log(i);
                var customerData = {
                    userID: "" + uriJSON[i].userID,
                    customerName: "" + uriJSON[i].firstName + " " + uriJSON[i].lastName,
                    companyName: "" + uriJSON[i].companyName,
                    address: "" + uriJSON[i].address,
                    phoneNumber: "" + uriJSON[i].phoneNumber,
                    email: "" + uriJSON[i].email,
                    profileLink: "" + uriJSON[i].link[0].url

                };
                var customerElementToAppend = customer_modal_template(customerData);
                var button = document.createElement("button");
                button.innerHTML = "user profile";
                button.addEventListener("click", function(){
                    window.location="profile.html";
                });
                $("#content").append(customerElementToAppend);
                $(".info-column").append(button);

            }

        } catch (err) {
            console.log(err);
        }
    }
    read();



})