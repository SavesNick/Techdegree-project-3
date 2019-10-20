//On page load, the cursor appears in the "Name" field, ready for a user to type
$("#name").focus()

//"Your job role" text field appears when user selects "Other" from the Job Role menu

$("#other-role").hide().click(function(){
    $("#other-role").show();
});
$("#other-role").hide()
$("#title").on('click' , function(event){
    if(event.target.value === "other"){
    
    $("#other-role").show();

    }else{
        $("#other-role").hide()
    };

});


//Until a theme is selected from the “Design” menu, no color options appear in the
//“Color” drop down and the “Color” field reads “Please select a T-shirt theme”
//When a new theme is selected from the "Design" menu, the "Color" field and drop
//down menu is updated
//$("#colors-js-puns").hide()
$("#design").change(function(){

if($("#design option:selected").text()==="Theme - JS Puns"){

$("#color").val("cornflowerblue").show();
$("#color option[value='cornflowerblue']").show();
$("#color option[value='gold']").show()
$("#color option[value='darkslategrey']").show();
$("#color option[value='tomato']").hide();
$("#color option[value='dimgrey']").hide();
$("#color option[value='steelblue']").hide();

   }else if($('#design').text() === "Select Theme"){
    $("#colors-js-puns").hide();

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
let totalValue = 0
$('.activities').append('<p></p>')

//for js-frameworks
$('input[name = "js-frameworks"]').on('click' , function(){

if($(this).is(':checked')){
    totalValue = totalValue + 100;
    $('.activities p').text("Total: $ " + totalValue);

    //prevent double booking between js-frameworks and express
$('[name= "express"]').attr("disabled" , "true").parent().fadeOut()


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

        $("[name = 'js-frameworks']").attr("disabled" , "true").parent().fadeOut();
        $("[name = 'build-tools']").attr("disabled" , "true").parent().fadeOut();

    }else{

        totalValue = totalValue - 100;
        $('.activities p').text("Total: $ " + totalValue)

        $("[name = 'js-frameworks']").removeAttr('disabled').parent().toggle();
        $('[name = "build-tools"]').removeAttr('disabled').parent().toggle()
    };
});

// for js-libs
$('input[name = "js-libs"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
// prevent double booking between js-libs and node
        $("[name = 'node']").attr("disabled" , "true").parent().fadeOut();
        

    }else{

        totalValue = totalValue - 100;
        $('.activities p').text("Total: $ " + totalValue)

        $("[name = 'node']").removeAttr('disabled').parent().toggle();
        
    };

});

// for node
$('input[name = "node"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);


        $("[name = 'js-libs']").attr("disabled" , "true").parent().fadeOut()

    }else{

        totalValue = totalValue - 100;
        $('.activities p').text("Total: $ " + totalValue)

        $("[name = 'js-libs']").removeAttr('disabled').parent().toggle()
    };
    
});
// for build tools
$('input[name = "build-tools"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
    }else{

        totalValue = totalValue - 100
        $('activities p').text("Total: $ " + totalValue)
    };
    
});
    // for npm
    $('input[name = "npm"]').on('click' , function(){

        if($(this).is(':checked')){
            totalValue = totalValue + 100;
            $('.activities p').text("Total: $ " + totalValue);
        }else{
            totalValue = totalValue - 100
            $('activities p').text("Total: $ " + totalValue)

        };
        
    });
        //for all
    $('input[name = "all"]').on('click' , function(){

            if($(this).is(':checked')){
                totalValue = totalValue + 200;
                $('.activities p').text("Total: $ " + totalValue);
//hides everything else
        $("[name = 'js-frameworks']").attr("disabled" , "true").parent().fadeOut();
        $("[name = 'build-tools']").attr("disabled" , "true").parent().fadeOut();
        $("[name = 'express']").attr("disabled" , "true").parent().fadeOut();
        $("[name = 'js-libs']").attr("disabled" , "true").parent().fadeOut();
        $("[name = 'node']").attr("disabled" , "true").parent().fadeOut();
        $("[name = 'npm']").attr("disabled" , "true").parent().fadeOut();
            }else{
                totalValue = totalValue - 200
                $('activities p').text("Total: $ " + totalValue)
//hides everything else
        $("[name = 'js-frameworks']").removeAttr('disabled').parent().toggle();
        $('[name = "build-tools"]').removeAttr('disabled').parent().toggle()
        $("[name = 'express']").removeAttr('disabled').parent().toggle();
        $('[name = "js-libs"]').removeAttr('disabled').parent().toggle()
        $("[name = 'node']").removeAttr('disabled').parent().toggle();
        $('[name = "npm"]').removeAttr('disabled').parent().toggle()
    
            };
            
            });


//payment information section            
$("#payment").val("credit card").show();
$(".paypal").focus();


// hide senesitve banking information for paypal and bitcoin

$("paypal").hide();
$("bitcoin").hide();


$('#payment').change(function(){

if($('#payment option:selected').text()==='PayPal') {
    $('.paypal').slideToggle(2000);
    $('.bitcoin').hide();
    $('#credit-card').hide(); 


}else if ($('#payment option:selected').text()==='Credit Card') {
    $('.paypal').hide();
    $('.bitcoin').hide();
    $('#credit-card').slideToggle(2000);



}else if ($('#payment option:selected').text()==='Bitcoin') {
    $('.paypal').hide();
    $('.bitcoin').slideToggle(1000);
    $('#credit-card').hide();
    
}else if ($('#payment option:selected').text()==="Select Payment Method"){

$('#payment').val("credit card").show()
$('.selectMethod').fadeOut()
};
});

//Validate required fields and provide error indications for invalid fields upon form
//submission
//for name 
$('form').submit(function(event){

if($('input:first').val()===""){

    alert('You Shall Not Pass... Without a name.')
    return false
};
});
//for email
$('form').submit(function(event){

    if($('input[name = "user_email"]').val()=== ''){
    
        alert('You Shall Not Pass... Without an email.')
        return false
    };
    });

//regex for email so email input is valid.

let emailInput = document.getElementById('email')

function validEmail(email){

return /^[^@]+@+\.[a-z]+$/i.test(email);
};

function tip(show, element){

if(show){
element.style.display = "inherit"
}else{
element.style.display = "none"
};
};

function eventListener(validity){
return event => {
const valid = validity(text)
const text = event.target.nextElementSibilings;
const showadvice = text !== '' && !valid;
const tool = event.target.nextElementSibilings;
tip(showadvice , tool);
};
};

emailInput.addEventListener("input" , createListener(validEmail));

$(document).submit(function(event){
if($('#checkBoxes input[tpye="checkbox"]:checked').length !== 0){
alert("Good Choice!");    
}else{
    alert("Please register for atleast one event.")
    return false 
};
});
//credit card feild.

$('form').submit(function(event){
if($('input[name="user_cc-num"]').val()===''){

    alert('No credit card? No event.')
}
return false
});

$('form').submit(function(event){
    let cc = document.getElementById('cc-num').value;
if(isNaN(cc) || cc === ""){
alert('Debit or credit card information is required to purchase the event chosen');
return false;
}else if(cc.length > 0 && cc.length < 13){
    alert('CC Number can not have less than 13 digits!')
return false;
}else if(cc.length>16){
alert('Credit card number can not have more than 16 digits!')
return false;
};
});
// the CVV mumber
$('form').submit(function(event){
    if($('input[name="user_cvv"]').val()===''){
    
        alert('No cvv? No event.')
    };
    return false
    });
    
    $('form').submit(function(event){
        let cvv = document.getElementById('cvv').value;
    if(isNaN(cvv) || cc === ""){
    alert('Debit or credit card information is required to purchase the event chosen');
    return false;
    }else if(cvv.length > 0 && cvv.length < 3){
        alert('cvv Number can not have less than 3 digits!')
    return false;
    }else if(cvv.length>3){
    alert('cvv number can not have more than 3 digits!')
    return false;
    };
    });

//zip code
$('form').submit(function(event){

        if($('input[name="user_zip"]').val()===''){
        
            alert('No Zip Code? No event.')
        };
        return false
        });
        
        $('form').submit(function(event){
            let zip = document.getElementById('zip').value;
        if(isNaN(zip) || zip === ""){

        alert('Zip code information is required for this feild.');
        return false;

        }else if(zip.length > 0 && zip.length < 5){

            alert('Zip code can not have less than 5 digits!')

        return false;

        }else if(zip.length>5){

        alert('Zip code can not have more than 5 digits!')

        return false;
        };
        });

