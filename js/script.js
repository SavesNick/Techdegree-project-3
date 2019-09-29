//On page load, the cursor appears in the "Name" field, ready for a user to type
$("#name").focus()

//"Your job role" text field appears when user selects "Other" from the Job Role menu
$("#other-role").hide()
$("#title").on('click' , function(event){
    if(event.target.value === "other"){
        
    $("#other-role").show();

    }else{
        $("#other-role").hide()
    }
});

//Until a theme is selected from the “Design” menu, no color options appear in the
//“Color” drop down and the “Color” field reads “Please select a T-shirt theme”
//When a new theme is selected from the "Design" menu, the "Color" field and drop
//down menu is updated

$("#design").change(function(event){

  
    if($('#design').val() === "Select Theme"){
        $("#colors-js-puns").hide()

    } else if($("#design option:selected").text()==="Theme - JS Puns"){
$("#color").val("cornflowerblue").show();
$("#color option[value='cornflowerblue']").show();
$("#color option[value='gold']").show()
$("#color option[value='darkslategrey']").show();
$("#color option[value='tomato']").hide();
$("#color option[value='dimgrey']").hide();
$("#color option[value='steelblue']").hide();

   }else if($("#design option:selected").text() === "Theme - I ♥ JS"){
        $("#color").val("tomato").show();
        $("#color option[value='tomato']").show();
        $("#color option[value='dimgrey']").show();
        $("#color option[value='steelblue']").show();
        $("#color option[value='cornflowerblue']").hide();
        $("#color option[value='gold']").hide()
        $("#color option[value='darkslategrey']").hide();
        
};

});
// Register Activities Section: User cannot select two activities that are at the same time
const totalValue = 0
$('.activities').append('<p></p>')

//for js-frameworks
$('input[name = "js-frameworks"]').on('click' , function(){

if($(this).is(':checked')){
    totalValue = totalValue + 100;
    $('.activities p').text("Total: $ " + totalValue);

    //prevent double booking between js-frameworks and express
$('[name= "express"]').attr('disabled' , true).parent().fadeout("slow")

}else{

totalValue = totalValue - 100
    $('.activities p').text("Total: $ " + totalValue)
        $('[name = "express"]').removeAttr('disabled').parent().toggle()
};

});


// for express
$('input[name = "express"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
    };
    
    });
// for js-libs
$('input[name = "js-libs"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
    };
    
    });
// for node
$('input[name = "node"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
    };
    
    });
// for build tools
$('input[name = "build-tools"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
    };
    
    });
    // for npm
    $('input[name = "npm"]').on('click' , function(){

        if($(this).is(':checked')){
            totalValue = totalValue + 100;
            $('.activities p').text("Total: $ " + totalValue);
        };
        
        });

//Validate required fields and provide error indications for invalid fields upon form
//submission