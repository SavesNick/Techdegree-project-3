//On page load, the cursor appears in the "Name" field, ready for a user to type
$("#name").focus();

//"Your job role" text field appears when user selects "Other" from the Job Role menu

$("#other-role")
  .hide()
  .click(function() {
    $("#other-role").show();
  });
$("#other-role").hide();
$("#title").on("click", function(event) {
  if (event.target.value === "other") {
    $("#other-role").show();
  } else {
    $("#other-role").hide();
  }
});


const fieldValidator = {
  name: null,
  mail: null,
  activities: null,
  "cc-num": null,
  zip: null,
  cvv: null
};

const $selectThemeOption = $("<option> Select a design </option>");
$("#color option").hide();
$("#color").prepend($selectThemeOption);
$selectThemeOption.attr("selected", true);

//Until a theme is selected from the “Design” menu, no color options appear in the
//“Color” drop down and the “Color” field reads “Please select a T-shirt theme”
//When a new theme is selected from the "Design" menu, the "Color" field and drop
//down menu is updated
$("#design").change(function() {
  if (
    $("#design option:selected")
      .attr("selected", true)
      .text() === "Select Theme"
  ) {
    $("#color option").hide();
  } else if ($("#design option:selected").text() === "Theme - JS Puns") {
    $("#color")
      .val("cornflowerblue")
      .show();
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='gold']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='tomato']").hide();
    $("#color option[value='dimgrey']").hide();
    $("#color option[value='steelblue']").hide();
  } else if ($("#design option:selected").text() === "Theme - I ♥ JS") {
    $("#color")
      .val("tomato")
      .show();
    $("#color option[value='tomato']").show();
    $("#color option[value='dimgrey']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='darkslategrey']").hide();
  }
});
// Register Activities Section: User cannot select two activities that are at the same time
let totalValue = 0;
$(".activities").append("<p></p>");

//for js-frameworks
$('input[name = "js-frameworks"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 100;
    $(".activities p").text("Total: $ " + totalValue);

    //prevent double booking between js-frameworks and express
    $('[name= "express"]').attr("disabled", "true");
  } else {
    totalValue = totalValue - 100;
    $(".activities p").text("Total: $ " + totalValue);
    $('[name = "express"]').removeAttr("disabled");
  }
});

// for express
$('input[name = "express"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 100;
    $(".activities p").text("Total: $ " + totalValue);

    $("[name = 'js-frameworks']").attr("disabled", "true");
  } else {
    totalValue = totalValue - 100;
    $(".activities p").text("Total: $ " + totalValue);

    $("[name = 'js-frameworks']").removeAttr("disabled");
  }
});

// for js-libs
$('input[name = "js-libs"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 100;
    $(".activities p").text("Total: $ " + totalValue);
    // prevent double booking between js-libs and node
    $("[name = 'node']").attr("disabled", "true");
  } else {
    totalValue = totalValue - 100;
    $(".activities p").text("Total: $ " + totalValue);

    $("[name = 'node']").removeAttr("disabled");
  }
});

// for node
$('input[name = "node"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 100;
    $(".activities p").text("Total: $ " + totalValue);

    $("[name = 'js-libs']").attr("disabled", "true");
  } else {
    totalValue = totalValue - 100;
    $(".activities p").text("Total: $ " + totalValue);

    $("[name = 'js-libs']").removeAttr("disabled");
  }
});
// for build tools
$('input[name = "build-tools"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 100;
    $(".activities p").text("Total: $ " + totalValue);
  } else {
    totalValue = totalValue - 100;
    $(".activities p").text("Total: $ " + totalValue);
  }
});
// for npm
$('input[name = "npm"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 100;
    $(".activities p").text("Total: $ " + totalValue);
  } else {
    totalValue = totalValue - 100;
    $(".activities p").text("Total: $ " + totalValue);
  }
});
//for all
$('input[name = "all"]').on("click", function() {
  if ($(this).is(":checked")) {
    totalValue = totalValue + 200;
    $(".activities p").text("Total: $ " + totalValue);
    //hides everything else
    $("[name = 'js-frameworks']").attr("disabled", "true");
    $("[name = 'build-tools']").attr("disabled", "true");
    $("[name = 'express']").attr("disabled", "true");
    $("[name = 'js-libs']").attr("disabled", "true");
    $("[name = 'node']").attr("disabled", "true");
    $("[name = 'npm']").attr("disabled", "true");
  } else {
    totalValue = totalValue - 200;
    $(".activities p").text("Total: $ " + totalValue);
    //shows everything else
    $("[name = 'js-frameworks']").removeAttr("disabled");
    $('[name = "build-tools"]').removeAttr("disabled");
    $("[name = 'express']").removeAttr("disabled");
    $('[name = "js-libs"]').removeAttr("disabled");
    $("[name = 'node']").removeAttr("disabled");
    $('[name = "npm"]').removeAttr("disabled");
  }
});


//payment information section
$("#payment")
  .val("credit card")
  .show();
// hide senesitve banking information for paypal and bitcoin

$("#payment").change(function(e) {
  if (e.target.value === "Credit Card") {
    $("#paypal").hide();
    $("#bitcoin").hide();
    $("#credit-card").show();
  } else if (e.target.value === "PayPal") {
    $("#credit-card").hide();
    $("#paypal").show();
    $("#bitcoin").hide();
  } else if (e.target.value === "Bitcoin") {
    $("#bitcoin").show();
    $("#paypal").hide();
    $("#credit-card").hide();
  } else if (e.target.value === "Select Payment Method") {
    $("#payment")
      .val("credit card")
      .show();
  }
});

$("#paypal").hide();
$("#bitcoin").hide();
//Validate required fields and provide error indications for invalid fields upon form
//submission
//#6fdc73 --- Green
//valid and invalid constants as well as for activities

function fieldIsInvalid(selectorString) {
  $(selectorString).css('border', '2px solid red').text("please add a valid name");
}
function fieldIsValid(selectorString) {
  $(selectorString).css('border', '2px solid green');
}
function activityIsInvalid() {
  $('.activities').css('color', 'red');
}
function activityIsValid() {
  $('.activities').css('color', 'initial');
}

//for name
function nameValidity() {
  const name = $("#name").val();
  const regexForName = /^\w[\s\w-]*$/;
  const validName = regexForName.test(name);
  fieldValidator.name = validName;
  return validName;
}
//if valid name input
$("#name").keyup(function() {
  nameValidity();
  if (fieldValidator.name) {
    fieldIsInvalid("#name")
  }
});

// if user moves past without a valid name
$("#name").on("blur", function() {
  if (fieldValidator.name) {
    fieldIsValid("#name");
  } else {
    fieldIsInvalid("#name");
  }
});

//for email
function emailValidity() {
  const email = $("#mail").val();
  const regexForEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validEmail = regexForEmail.test(email);
  fieldValidator.mail = validEmail;
  return validEmail;
}
//if valid email input
$("#mail").keyup(function() {
  emailValidity();
  if (fieldValidator.mail) {
    fieldIsInvalid("#mail");
  }
});
// if user moves past without valid email.
$("#mail").on("blur", function() {
  if (fieldValidator.mail) {
    fieldIsValid("#mail");
  } else {
    fieldIsInvalid("#mail");
  }
});

//activities field
function activitiesValidation() {
  const checked = $(".activities").length;
  // let validActivities;
  if (checked === 0) {
    activityIsInvalid;
  } else {
    activityIsValid;
  }
  fieldValidator.activities = activityIsValid;
  return activityIsValid;
}

$(".activities").change(function() {
  activitiesValidation();
  if (fieldValidator.activities) {
    activityIsValid;
  } else {
    activityIsInvalid;
  }
});
//credit card feild.
function cardValidity() {
  const card = $("#cc-num").val();
  const regexForCard = /\b\d{13,16}\b/;
  const validCard = regexForCard.test(card);
  fieldValidator["cc-num"] = validCard;
  return validCard;
}
//if valid credit card input
$("#cc-num").keyup(function() {
  emailValidity();
  if (fieldValidator["cc-num"]) {
    fieldIsInvalid("#cc-num");
  }
});
// if user moves past without valid card.
$("#cc-num").on("blur", function() {
  if (fieldValidator["cc-num"]) {
    fieldIsValid("#cc-num");
  } else {
    fieldIsInvalid("#cc-num");
  }
});

//cvv number field
function cvvValidity() {
    const cvv = $("#cvv").val();
    const regexForCvv = /\b\d{3}\b/;
    const validCvv = regexForCvv.test(cvv);
    fieldValidator.cvv = validCvv;
    return validCvv;
  }
  //if valid cvv input
  $("#cvv").keyup(function() {
    cvvValidity();
    if (fieldValidator.cvv) {
      fieldIsInvalid("#cvv");
    }
  });
  // if user moves past without valid cvv.
  $("#cvv").on("blur", function() {
    if (fieldValidator.cvv) {
      fieldIsValid("#cvv");
    } else {
      fieldIsInvalid("#cvv");
    }
  });

//for zip
function zipValidity() {
  const zip = $("#zip").val();
  const regexForZip = /\b\d{5}\b/;
  const validZip = regexForZip.test(zip);
  fieldValidator.zip = validZip;
  return validZip;
}
//if valid email input
$("#zip").keyup(function() {
  zipValidity();
  if (fieldValidator.zip) {
    fieldIsInvalid("#zip");
  }
});
// if user moves past without valid email.
$("#zip").on("blur", function() {
  if (fieldValidator.zip) {
    fieldIsValid("#zip");
  } else {
    fieldIsInvalid("#zip");
  }
});

// upon submitting the form required fields needs changing if needed
function ableToSubmitForm() {
  const valid =
    fieldValidator.name && fieldValidator.mail && fieldValidator.activities;

  if ($("#payment option:selected").val() === "Credit Card") {
     valid &&
      fieldValidator["cc-num"] &&
      fieldValidator.zip &&
      fieldValidator.cvv;
 }
 return valid;
}

function failedFields() {
  for (let fieldName in fieldValidator) {
    if (fieldName === "activities" && !fieldValidator.activities) {
      activityIsInvalid();
    } else if (!fieldValidator[fieldName]) {
      activityIsInvalid("#" + fieldName);
    }
  }
}
$("form").submit(function(e) {
  if ( !ableToSubmitForm() ) {
    e.preventDefault();
    failedFields();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
