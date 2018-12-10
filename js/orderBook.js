$(document).ready(function () {

    var postOrderURI = getCookieFunction("postOrderURI");
    console.log("POST ORDER URI TEST: " + postOrderURI);

    $('form').submit(function (event) {
        var customerID = getCookieFunction("customerID");
        console.log("CUSTOMER ID FOR ORDER A BOOK: " + customerID);
        var orderRequest = {
             "orderProducts": [{
                'productName': getProductName(),
                'productPrice': null,
                'productReview': null,
                'productOwner': getCookieFunction("customerID"),
                'productID': null,
                'isbn': null,
                'author': null,
                'category': "Book"
             }]
        }
        $.ajax({
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: postOrderURI,
            data: JSON.stringify(orderRequest),
            dataType: 'json',
            encode: true
        }).done(function (returnedData) {
            console.log(returnedData);
            alert("Book has been ORDERED! " + "ORDER ID: " + returnedData.orderID
            + " Shipping Date: " + returnedData.sqlExpectedShippingDate + " Order Status: " + returnedData.status);

        });
        event.preventDefault(); // waits for a response from server before proceeding with the rest of the code

    })

    function getProductName() {
        return $("input[name=bookname]").val();
    }


})