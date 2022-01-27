function validateLogin() {

  let username = document.forms["login"]["username"].value;
  let password = document.forms["login"]["password"].value;


  if (username == "") {
    document.getElementById('log').innerHTML = "Username cannot be empty!";
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username) == false){
    document.getElementById('log').innerHTML = "Bad e-mail format!";
    return false;
  }

  if (password == "") {
    document.getElementById('log').innerHTML = "Password cannot be empty!";
    return false;
  }
  if (password.length()<5){
    document.getElementById('log').innerHTML = "Password cannot be shorter than 5 characters.";
    return false;
  }

  let dataObject = [username, password, firstName, familyName, gender, city, country];
  serverstub.signIn(dataObject);
}

function validateSignUp() {

  let username = document.forms["signUp"]["username"].value;
  let password = document.forms["signUp"]["password"].value;
  let firstName = document.forms["signUp"]["firstName"].value;
  let familyName = document.forms["signUp"]["familyName"].value;
  let city = document.forms["signUp"]["city"].value;
  let country = document.forms["signUp"]["country"].value;
  let rPassword = document.forms["signUp"]["rPassword"].value;

  if (username == "") {
    document.getElementById('log').innerHTML = "Username cannot be empty!";
    return false;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(username) == false){
    document.getElementById('log').innerHTML = "Bad e-mail format!";
    return false;
  }

  if (firstName == "") {
    document.getElementById('log').innerHTML = "Name cannot be empty!";
    return false;
  }

  if (familyName == "") {
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
  let dataObject = [username, password, firstName, familyName, gender, city, country];
  serverstub.signUp(dataObject);
}
