// Change active id on product sizes.
$(document).ready(function(){
    $(".size span").click(function(){
        $('#active').removeAttr('id');
        $(this).attr("id","active");
        $('#colortext').text()
    })
})

// Change colorname and image on click

$(document).ready(function(){
    $(".color img").click(function(){

        // $(this).css("border","");
        $(this).attr("style","");

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
        $(this).css({"border":"2px solid #979797"},{"border-radius":"25px"});
        // $(this).attr("id","selectedcolor");
        // $('#selectedcolor').css('display')
    })
})



