// Change sizetext and image state on product sizes.


$(document).ready(function(){
    $(".sizes span").click(function(){
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
        $(".sizes span").css({"background-color":"#F4F4F4","color":"black"});
        $(this).css({"background-color":"#F8E71C","color":"#fff"
                        });

    })
})


// Change colorname and image on click

$(document).ready(function(){
    $(".colors img").click(function(){
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
        $(".colors img").css({"border":"0px"});
        $(this).css({"border":"2px solid #979797",
                        "border-radius":"25px"});

    })
})



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


// get name, quantitity and price from html
// set local storage
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

        }
    })
})

$(document).ready(function(){
    $(".color").click(function(){
        console.log($(this).attr("data-color"));
        var color = $(this).attr("data-color")
        if(typeof item == "undefined"){
            console.log("no item!");
            item = new Item();
        }

        item.color = color;
        console.log("item: ", item);

    });


    $(".size").click(function(){
        console.log($(this).text());
        var size = $(this).text();


        if(typeof item == "undefined"){
            console.log("no item!");
            item = new Item();
        }

        item.size = size;
        console.log("item: ", item);

    });
});




var Item = function(){
    this.name = null;
    this.color = null;
    this.size = null;
    this.count = null;
    this.price = null;
}





