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


const feildValidator = {
name: null , mail: null, activities: null, 'cc-num':null, zip:null ,cvv: null 

}

const $selectThemeOption = $("<option> Select a design </option>")
$("#color option").hide();
$("#color").prepend($selectThemeOption)
$selectThemeOption.attr("selected" , true)

//Until a theme is selected from the “Design” menu, no color options appear in the
//“Color” drop down and the “Color” field reads “Please select a T-shirt theme”
//When a new theme is selected from the "Design" menu, the "Color" field and drop
//down menu is updated
//$("#colors-js-puns").hide()
$("#design").change(function()
{
    if($('#design option:selected').attr("selected" , true ).text() === "Select Theme"){
        $("#color option").hide()

    }else if($("#design option:selected").text()==="Theme - JS Puns"){

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
let totalValue = 0
$('.activities').append('<p></p>')

//for js-frameworks
$('input[name = "js-frameworks"]').on('click' , function(){

if($(this).is(':checked')){
    totalValue = totalValue + 100;
    $('.activities p').text("Total: $ " + totalValue);

    //prevent double booking between js-frameworks and express
$('[name= "express"]').attr("disabled" , "true");


}else{

totalValue = totalValue - 100
    $('.activities p').text("Total: $ " + totalValue)
        $('[name = "express"]').removeAttr('disabled')
};

});


// for express
$('input[name = "express"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);

        $("[name = 'js-frameworks']").attr("disabled" , "true")
        

    }else{

        totalValue = totalValue - 100;
        $('.activities p').text("Total: $ " + totalValue)

        $("[name = 'js-frameworks']").removeAttr('disabled')
        
    };
});

// for js-libs
$('input[name = "js-libs"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);
// prevent double booking between js-libs and node
        $("[name = 'node']").attr("disabled" , "true")
        

    }else{

        totalValue = totalValue - 100;
        $('.activities p').text("Total: $ " + totalValue)

        $("[name = 'node']").removeAttr('disabled')
        
    };

});

// for node
$('input[name = "node"]').on('click' , function(){

    if($(this).is(':checked')){
        totalValue = totalValue + 100;
        $('.activities p').text("Total: $ " + totalValue);


        $("[name = 'js-libs']").attr("disabled" , "true")
    }else{

        totalValue = totalValue - 100;
        $('.activities p').text("Total: $ " + totalValue)

        $("[name = 'js-libs']").removeAttr('disabled')
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
        $("[name = 'js-frameworks']").attr("disabled" , "true")
        $("[name = 'build-tools']").attr("disabled" , "true")
        $("[name = 'express']").attr("disabled" , "true")
        $("[name = 'js-libs']").attr("disabled" , "true")
        $("[name = 'node']").attr("disabled" , "true")
        $("[name = 'npm']").attr("disabled" , "true")
            }else{
                totalValue = totalValue - 200
                $('activities p').text("Total: $ " + totalValue)
//shows everything else
        $("[name = 'js-frameworks']").removeAttr('disabled')
        $('[name = "build-tools"]').removeAttr('disabled')
        $("[name = 'express']").removeAttr('disabled')
        $('[name = "js-libs"]').removeAttr('disabled')
        $("[name = 'node']").removeAttr('disabled')
        $('[name = "npm"]').removeAttr('disabled')
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
//#6fdc73
//valid and invalid constants as well as for activities
function showFieldAsInvalid(selectorString) {
    $(selectorString).css('border', '2px Maroon');
  }

  function showFieldAsValid(selectorString) {
    $(selectorString).css('border', '2px solid #6fdc73');
  }
  function showActivitiesAsInvalid() {
    $('.activities').css('color', 'red');
  }
  function showActivitiesAsValid() {
    $('.activities').css('color', 'initial');
  };

//for name 
function nameValidity(){
let name = $("#name").val
let regexForName = /^\w[\s\w-]*$/;
let validName = regexForName.test(name)
feildValidator.name = validName
return validName
};
//if valid name input


//for email
function emailValidity(){
    let email = $("#email").val
    let regexForEmail = /^[^@]+@+\.[a-z]+$/i;
    let validEmail = regexForEmail.test(email)
    feildValidator.mail = validEmail
    return validEmail
    };
//if valid email input



//credit card feild.


$('form').submit(function(){
if($('input[name="user_cc-num"]').val()===''){

    alert('No credit card? No event.')
}
return false
});

$('form').submit(function(){
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
// the CVV number
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

