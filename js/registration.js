function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

const yearSelect = document.getElementById("birthyear");
function populateYears(){
  //Get the current year as a number
  let year = new Date().getFullYear();
  //Make the previous 100 years be an option
  for(let i = 0; i < 111; i++){
      const option = document.createElement("option");
      option.textContent = year - i;
      yearSelect.appendChild(option);
  }
}

populateYears();

yearSelect.onchange = function() {
  populateDays(yearSelect.value);
}
let emptyBirthyearError = document.getElementById("empty-birthyear");
let limitBirthyearError = document.getElementById("limit-birthyear")


  //First Name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");
let capitalFirstNameError = document.getElementById("capital-first-name")

//Last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");
let capitalLastNameError = document.getElementById("capital-last-name")

//Phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

//Email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

//verify email
let verifyEmailInput = document.getElementById("verify-email");
let verifyEmailError = document.getElementById("verify-email-error");
let emptyVerifyEmailError = document.getElementById("empty-verify-password");

//radio buttons - student status
let studentStatus = document.querySelector('input[name="studentStatus"]:checked')  
let studentStatusError = document.getElementById("student-status-error")

// radio buttons - employement status
let employmentStatus = document.querySelector('input[name="employmentStatus"]:checked')  
let employmentStatusError = document.getElementById("employment-status-error")

//Password
let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

//Verify Password
let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

//Submit
let submitButton = document.getElementById("submit-button");

//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");


//first name verification
const firstnameVerify = (name) => {
    const regex =
      /^[A-Z][a-z]$/;
    return regex.test(name);
};

//first name verification
const lastnameVerify = (lname) => {
    const regex =
      /^[A-Z][a-z]$/;
    return regex.test(lname);
  };

//Password Verification
const passwordVerify = (password) => {
  const regex =
    /^(?=.+[(a-z)(A-Z)])(?=.+[0-9])(?=.+[\$\%\^\&\!@\#\*\(\)\+\=`~\?\>\<])/;
  return regex.test(password) && password.length >= 6;
};

//Text verification (if input contains only text)
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{2,}$/;
  return regex.test(text);
};

//Phone number verification
const phoneVerify = (number) => {
  const regex = /^4[0-9]{9}$/;
  return regex.test(number);
};

//Email verification
const emailVerify = (input) => {
  const regex = /^[a-z0-9_]+@[a-z]{2,}\.[a-z\.]{3,}$/;
  return regex.test(input);
};

//For empty input - accepts(input,empty error for that input and other errors)
const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    //input is null/empty
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    //input has some content
    emptyErrorReference.classList.add("hide");
  }
};

//For error styling and displaying error message
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};

//For no errors
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};
    
//First name
firstNameInput.addEventListener("input", () => {

  if (textVerify(firstNameInput.value)) {
    //If verification returns true
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
    if (firstnameVerify(firstNameInput.value)){
        capitalFirstNameError.classList.add("hide");
        validInput(firstNameInput);
  }
  } 
  
  else {
    //for false
    errorUpdate(firstNameInput, firstNameError);
    //empty checker
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
    errorUpdate(firstNameInput, capitalFirstNameError)
  }
});

//Last name
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
    if (lastnameVerify(lastNameInput.value)){
        capitalLastNameError.classList.add("hide");
        validInput(lastNameInput);
    }
  } 

  else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
    errorUpdate(lastNameInput, capitalLastNameError)
  }
});

//Phone
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});

//Email
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});

//Verify email
verifyEmailInput.addEventListener("input", () => {
    if (verifyEmailInput.value === emailInput.value) {
      verifyEmailError.classList.add("hide");
      validInput(verifyEmailInput);
    } else {
      errorUpdate(verifyEmailInput, verifyEmailError);
      emptyUpdate(emailInput, emptyVerifyEmailError, verifyEmailError);
    }
  });

//birthyear
yearSelect.addEventListener("input", () => {
  if ((yearSelect.value) <= 2007) {
    limitBirthyearError.classList.add("hide");
      validInput(yearSelect);
  } else{
    errorUpdate(yearSelect, limitBirthyearError);
  }
});

//student status
if (studentStatus!=null){
  studentStatusError.classList.add("hide");
  validInput(studentStatus);
}

//student status
if (employmentStatus!=null){
  employmentStatusError.classList.add("hide");
  validInput(employmentStatus);
}

//Password
passwordInput.addEventListener("input", () => {
  if (passwordVerify(passwordInput.value)) {
    passwordError.classList.add("hide");
    validInput(passwordInput);
  } else {
    errorUpdate(passwordInput, passwordError);
    emptyUpdate(passwordInput, emptyPasswordError, passwordError);
  }
});


//Submit button
submitButton.addEventListener("click", () => {
  return true
});
