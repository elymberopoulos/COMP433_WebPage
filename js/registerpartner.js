$(document).ready(function () {

    //extract whatever is inside of the script tag with an id of employee-modal-template
    var source = $("#partner-modal-template").html();

    var partner_modal_template = Handlebars.compile(source);

    var partnerResourceURI = "http://localhost:8081/partner"
    //http://localhost:8081/partner

    //retrieve all the employees from server then display them on the homepage
    // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
    $.getJSON(partnerResourceURI, function (partner) {

        for (var i = 0; i < partner.length; i++) {

            var partnerData = {
                FirstName: "" + partner[i].firstName,
                LastName: "" + partner[i].lastName,
                Email: "" + partner[i].email,
                PhoneNumber: "" + partner[i].phoneNumber,
                CompanyName: "" + partner[i].companyName,
                Address: "" + partner[i].address,
                bankaccountNumber: "" + partner[i].bankAccountNumber,

            };

            //replace all the variables within the compiled script tag above with each value of employee data.
            var partnerElementToAppend = partner_modal_template(partnerData);

            //embed the html element which contains employee information into the html div tag with id 'content'
            $("#content").append(partnerElementToAppend);

        }

    });




    //submit the add employee form to the server
    $('form').submit(function (event) {

        // /**
        //  * salary and privilege are not sent to the server since there is no endpoint that accepts those parameters
        //  * @type {{firstName: *, lastName: *}}
        //  */
        var formData = {
            'FirstName': getfirstName(),
            'LastName': getlastName(),
            'Email': getemail(),
            'PhoneNumber': getphoneNumber(),
            'CompanyName': getcompanyName(),
            'Address': getaddress(),
            'bankaccountNumber': getbankAccountNumber(),
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
