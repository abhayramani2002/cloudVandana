document.getElementById("mobile").addEventListener("input", function () {
  validateMobile();
});

function validateMobile() {
  var mobileInput = document.getElementById("mobile");
  var mobilePattern = /^[+0-9\s.()/-]{6,15}$/;

  if (mobileInput.value && !mobilePattern.test(mobileInput.value)) {
    mobileInput.setCustomValidity("Invalid mobile number");
  } else {
    mobileInput.setCustomValidity("");
  }
}

function submitForm() {
  var form = document.getElementById("surveyForm");
  var popup = document.getElementById("popup");
  var popupContent = document.getElementById("popupContent");

  validateMobile();

  clearErrorMessages();

  var formElements = form.elements;
  var isValid = true;

  for (var i = 0; i < formElements.length; i++) {
    if (
      formElements[i].hasAttribute("required") &&
      !formElements[i].value.trim()
    ) {
      var errorMessage = document.createElement("div");
      errorMessage.className = "error-message";
      errorMessage.innerHTML = "Please fill out this field.";
      formElements[i].insertAdjacentElement("beforebegin", errorMessage);
      isValid = false;
    }
  }

  if (isValid) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.getElementById("gender").value;
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    var message =
      "<strong>First Name:</strong> " +
      firstName +
      "<br>" +
      "<strong>Last Name:</strong> " +
      lastName +
      "<br>" +
      "<strong>Date of Birth:</strong> " +
      dob +
      "<br>" +
      "<strong>Country:</strong> " +
      country +
      "<br>" +
      "<strong>Gender:</strong> " +
      gender +
      "<br>" +
      "<strong>Profession:</strong> " +
      profession +
      "<br>" +
      "<strong>Email:</strong> " +
      email +
      "<br>" +
      "<strong>Mobile Number:</strong> " +
      mobile;

    popupContent.innerHTML = message;

    popup.style.display = "block";
  }
}

function resetForm() {
  var form = document.getElementById("surveyForm");
  form.reset();
  clearErrorMessages();
}

function clearErrorMessages() {
  var errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach(function (errorMessage) {
    errorMessage.remove();
  });
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";

  resetForm();
}

var countryDropdown = document.getElementById("country");
countriesList.forEach(function (country) {
  var option = document.createElement("option");
  option.value = country;
  option.text = country;
  countryDropdown.add(option);
});
