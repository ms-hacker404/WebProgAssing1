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
  //this is the main function 
function checkForm() {

    //collecting user inputs 
    fullname = document.getElementById("fullname").value;
    email = document.getElementById("email").value;
     //calls another function checkEmail
    message = document.getElementById("message").value;
  if (fullname == "") 
    { 

	document.getElementById("fullnameError"). style.display = "inline";
	document.getElementById("fullname").select();
	document.getElementById("fullname").focus();
	return false;
    }
  else if (email == "") 
    {
   
   document.getElementById("emailError"). style.display = "inline";
   document.getElementById("email").select();
   document.getElementById("email").focus();
   return false;
     }
     else if (message == "") 
     {
    
    document.getElementById("messageError"). style.display = "inline";
    document.getElementById("email").select();
    document.getElementById("email").focus();
    return false;
      }

alert("Submitted!");
return true;
}
