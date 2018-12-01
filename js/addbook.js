$(document).ready(function () {

    //extract whatever is inside of the script tag with an id of employee-modal-template

    var bookResourceURI = "http://localhost:8081/book"




    //submit the add employee form to the server
    $('form').submit(function (event) {

        // /**
        //  * salary and privilege are not sent to the server since there is no endpoint that accepts those parameters
        //  * @type {{firstName: *, lastName: *}}
        //  */
        var formData = {
            'ProductName': getProductName(),
            'ProductPrice': getProductPrice(),
            'ProductReview': getProductReview(),
            'ProductOwner': getProductOwner(),
            'ProductID': getProductID(),
            'Isbn': getIsbn(),
            'Author': getAuthor(),
            'Category': getCategory()
        };

        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: bookResourceURI,
            data: JSON.stringify(formData),
            dataType: 'json',
            encode: true
        }).done(function (returnedData) {

            alert("Book has been added");

        });
        event.preventDefault(); // waits for a response from server before proceeding with the rest of the code

    });

    function getProductName() {
        return $("input[name=bookname]").val();
    
    }
    
    function getProductPrice() {
        return $("input[name=productprice]").val();
    
    
    }
    
    function getProductReview() {
        return $("input[name=bookreview]").val();
    
    
    }
    
    function getProductOwner() {
        return $("input[name=ownername]").val();
    
    
    }
    
    function getProductID() {
        return $("input[name=productid]").val();
    
    
    }
    
    function getIsbn() {
        return $("input[name=isbn]").val();
    
    
    }
    
    function getCategory() {
        return $("input[name=category]").val();
    
    
    }
}

);