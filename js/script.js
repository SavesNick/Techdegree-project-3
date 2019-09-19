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
    if($("#design option:selected").text()==="Theme - JS puns"){
$("#color").val("cornflowerblue").show();
$("#color option[value='cornflowerblue']").show();
$("#color option[value='gold']").show()
$("#color option[value='darkslategrey']").show();
$("#color option[value='tomato']").hide();
$("#color option[value='dimgrey']").hide();
$("#color option[value='steelblue']").hide();

    } else if($("#design option:selected").text() === "Theme - I &#9829 JS"){
        $("#color").val("cornflowerblue").hide();
        $("#color option[value='cornflowerblue']").hide();
        $("#color option[value='gold']").hide()
        $("#color option[value='darkslategrey']").hide();
        $("#color option[value='tomato']").show();
        $("#color option[value='dimgrey']").show();
        $("#color option[value='steelblue']").show();

}else if($('#design').val() === "Select Themes"){
    $("#colors-js-puns").hide()
};

});


//User cannot select two activities that are at the same time

//Validate required fields and provide error indications for invalid fields upon form
//submission