jQuery (".fold")    .click (function () {
    if (jQuery (this).children (".fold_p").text() == "Add to Cart") {
            jQuery (this).children (".fold_p").text("CHECK OUT");

    }
    else {
         jQuery (this).children (".fold_p").text("Add to Cart");        
    }
});







