window.onload = function(){
document.getElementById("welcome").innerHTML = document.getElementById("welcomeview").textContent;
}


function validateLogin() {

  let email = document.forms["login"]["username"].value;
  let password = document.forms["login"]["password"].value;


  if (email == "") {
    document.getElementById('log').innerHTML = "Username cannot be empty!";
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
    document.getElementById('log').innerHTML = "Bad e-mail format!";
    return false;
  }

  if (password == "") {
    document.getElementById('log').innerHTML = "Password cannot be empty!";
    return false;
  }
  if (password.length<5){
    document.getElementById('log').innerHTML = "Password cannot be shorter than 5 characters.";
    return false;
  }

  let dataObject = {"email" : email, "password" : password}
  let a = serverstub.signIn(email, password);
  let token;
  document.getElementById('log').innerHTML = a.message;
  token = a.data;
  console.log(token);
  if(token != null){

    document.getElementById("welcome").innerHTML = document.getElementById("profileview").textContent;

  }
}

function validateSignUp() {

  let email = document.forms["signUp"]["username"].value;
  let password = document.forms["signUp"]["password"].value;
  let firstname = document.forms["signUp"]["firstName"].value;
  let familyname = document.forms["signUp"]["familyName"].value;
  let city = document.forms["signUp"]["city"].value;
  let country = document.forms["signUp"]["country"].value;
  let rPassword = document.forms["signUp"]["rPassword"].value;
  let gender = document.forms["signUp"]["gender"].value;

  if (email == "") {
    document.getElementById('log').innerHTML = "Username cannot be empty!";
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
    document.getElementById('log').innerHTML = "Bad e-mail format!";
    return false;
  }

  if (firstname == "") {
    document.getElementById('log').innerHTML = "Name cannot be empty!";
    return false;
  }

  if (familyname == "") {
    document.getElementById('log').innerHTML = "Family name cannot be empty!";
    return false;
  }

  if (city == "") {
    document.getElementById('log').innerHTML = "City cannot be empty!";
    return false;
  }

  if (country == "") {
    document.getElementById('log').innerHTML = "Country cannot be empty!";
    return false;
  }


  if (password == "") {
    document.getElementById('log').innerHTML = "Password cannot be empty!";
    return false;
  }
  if (password.length<5){
    document.getElementById('log').innerHTML = "Password cannot be shorter than 5 characters.";
    return false;
  }

  if(password != rPassword){
    document.getElementById('log').innerHTML = "Passwords should be equal!";
    return false;
  }


  let dataObject = {"email" : email, "password" : password, "firstname" : firstname, "familyname" : familyname, "gender" : gender, "city" : city, "country" : country}
  console.log(dataObject);
  document.getElementById('log').innerHTML = serverstub.signUp(dataObject).message;
}
