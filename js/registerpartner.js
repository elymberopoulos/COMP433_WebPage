$(document).ready(function () {

    //extract whatever is inside of the script tag with an id of employee-modal-template

    var partnerResourceURI = "http://localhost:8081/partner"
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
            'bankAccountNumber': getbankAccountNumber(),
            'partnerPassword': getPartnerPassword()
        };

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: partnerResourceURI,
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true
        }).done(function (returnedData) {

            alert("partner account has been created");

        });
        event.preventDefault(); // waits for a response from server before proceeding with the rest of the code

    });


    function getPartnerPassword() {
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

    function getbankAccountNumber() {
        return $("input[name=bankaccountNumber]").val();


    }
}

);
