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


var quantity = document.getElementById('qty');

$(document).ready(function(){
    $('#addtocart').click(function(){
        saveStatusLocally()
    })
})


function saveStatusLocally(){
    var currentnum = $("#feedback").text();
    console.log(currentnum);
    var quantityToSave = quantity.value;
    if ((quantityToSave == null) || (quantityToSave =="")) {
        document.getElementById('feedback').innerHTML = "";
    } else {
        localStorage.setItem("database", JSON.stringify(quantityToSave));
        console.log(
            localStorage.getItem('database'));
        document.getElementById('feedback').innerHTML = localStorage.getItem('database');
    }
}












