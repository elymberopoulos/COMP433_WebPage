$(document).ready(function () {

    //extract whatever is inside of the script tag with an id of employee-modal-template
    var source = $("#book-modal-template").html();

    var book_modal_template = Handlebars.compile(source);

    var bookResourceURI= "http://localhost:8081/book"
    //http://localhost:8081/partner

    //retrieve all the employees from server then display them on the homepage
    // if server doesn't return any employees for some reason, the homepage will not have a list of employees displayed.
    $.getJSON(bookResourceURI, function (book) {

        for (var i = 0; i < book.length; i++) {

            var bookData = {
                ProductID: ""+book[i].ProductID,
                ProductName: ""+book[i].ProductName,
                ProductPrice: ""+book[i].ProductPrice,
                ProductReview: ""+book[i].ProductReview,
                ProductOwner: ""+book[i].ProductOwner,
                Isbn: ""+book[i].Isbn,
                Author: ""+book[i].Author,
                Category: ""+book[i].Category,

            };

            //replace all the variables within the compiled script tag above with each value of employee data.
            var bookElementToAppend = book_modal_template(bookData);

            //embed the html element which contains employee information into the html div tag with id 'content'
            $("#content").append(bookElementToAppend);

        }

    });




    //submit the add employee form to the server
    $('form').submit(function (event) {

        /**
         * salary and privilege are not sent to the server since there is no endpoint that accepts those parameters
         * @type {{firstName: *, lastName: *}}
         */
        var formData = {
            'ProductName': getProductName(),
            'ProductPrice': getProductPrice(),
            'ProductReview': getProductReview(),
            'ProductOwner': getProductOwner(),
            'ProductID':getProductID(),
            'Isbn': getIsbn(),
            'Author': getAuthor(),
            'Category': getCategory());
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
        }).done(function(returnedData){

            alert("Book has been added");

        });
        event.preventDefault(); // waits for a response from server before proceeding with the rest of the code

    });

    }
    function getProductName(){
        return $("input[name=bookname]").val();

    }

    function getProductPrice(){
        return $("input[name=productprice]").val();


    }

    function getProductReview(){
        return $("input[name=bookreview]").val();


    }

    function getProductOwner(){
        return $("input[name=ownername]").val();


    }

    function getProductID(){
        return $("input[name=productid]").val();


    }

    function getIsbn(){
        return $("input[name=isbn]").val();


    }

    function getCategory(){
        return $("input[name=category]").val();


    }



});
