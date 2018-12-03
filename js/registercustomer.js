$(document).ready(function () {

    //extract whatever is inside of the script tag with an id of employee-modal-template

    var customerResourceURI = "http://localhost:8081/customer"
    //http://localhost:8081/partner

    //submit the add employee form to the server
    $('form').submit(function (event) {

        // /**
        //  * salary and privilege are not sent to the server since there is no endpoint that accepts those parameters
        //  * @type {{firstName: *, lastName: *}}
        //  */
        var formData = {
            'userID': getUserID(),
            'firstName': getfirstName(),
            'lastName': getlastName(),
            'companyName': getcompanyName(),
            'address': getaddress(),
            'phoneNumber': getphoneNumber(),
            'email': getemail(),
            //'customerOrder': null,
            'creditCardNumber': getcreditCardNumber(),
            'password': getCustomerPassword()
        };

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: customerResourceURI,
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true
        }).done(function (returnedData) {

            alert("Customer account has been created");

        });
        event.preventDefault(); // waits for a response from server before proceeding with the rest of the code

    });
    function getCustomerPassword() {
        return $("input[name=password]").val();
    }

    function getUserID(){
        return $("input[name=userID]").val();
    }

    function getfirstName() {
        return $("input[name=FirstName]").val();

    }

    function getlastName() {
        return $("input[name=LastName]").val();


    }

    function getemail() {
        return $("input[name=Email]").val();


    }

    function getphoneNumber() {
        return $("input[name=PhoneNumber]").val();


    }

    function getcompanyName() {
        return $("input[name=CompanyName]").val();


    }

    function getaddress() {
        return $("input[name=Address]").val();


    }

    function getcreditCardNumber() {
        return $("input[name=creditcardNumber]").val();


    }
}

);
