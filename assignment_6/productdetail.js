// Change sizetext and image state on product sizes.

$(document).ready(function(){
    $(".size span").click(function(){
        if (this.id === "t") {
            $('#sizetext').text("Size: Tiny");
        }
        else if(this.id === "s") {
            $('#sizetext').text("Size: Small");
        }
        else if(this.id === "m"){
            $('#sizetext').text("Size: Middle");
        }
        else if(this.id ==="l"){
            $('#sizetext').text("Size: Large");
        }
        $(".size span").css({"background-color":"#F4F4F4","color":"black"});
        $(this).css({"background-color":"#F8E71C","color":"#fff"
                        });

    })
})


// Change colorname and image on click

$(document).ready(function(){
    $(".color img").click(function(){
        if (this.id === "2") {
            $('#colortext').text("Color: Blackberry");
        }
        else if(this.id === "3") {
            $('#colortext').text("Color: Crazyberry");
        }
        else if(this.id === "4"){
            $('#colortext').text("Color: Fireorange");
        }
        else if(this.id ==="1"){
            $('#colortext').text("Color: Strawberry");
        }
        $(".color img").css({"border":"0px"});
        $(this).css({"border":"2px solid #979797",
                        "border-radius":"25px"});

    })
})

var cat_harness_1 = {
    color: "Strawberry",
    size: "Tiny",
    Quantity: 0
}


function cat_harness_1(color, size, quantity) {
    this.color = color,
    this.size = size,
    this.quantity = quantity
}


$(document).ready(function(){
    var cart_current = parseInt(JSON.parse(localStorage.getItem("database")));
    if (cart_current > 0) {
        $("#feedback").text(cart_current);
        $('#selectedQty').text(cart_current);
        $('#total_price').text((cart_current)*10)
    } else {
        $("#feedback").text("0");
        $('#selectedQty').text("0");
        $('#total_price').text('0');
    }

    var cart_total = parseInt($("#feedback").text());
    console.log(cart_total);

    $('#addtocart').click(function(){
        var itemCount = parseInt($('#qty').val());
        if (itemCount =="") {
            $("#feedback").innerHTML = "";
        }
        else {
            cart_total = cart_total + itemCount;
            localStorage.setItem("database", JSON.stringify(cart_total));

            console.log(
                localStorage.getItem('database'));
            $('#feedback').text(cart_total);

            // $('#selectedQty').text(cart_total)
            // var color = $(this).siblings(".color");
            // var size = $(this).siblings(".size");
            // var quantity = $(this).quantity(".quantity");




        }
    })
})
























