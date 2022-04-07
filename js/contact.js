const firebaseConfig = {
    apiKey: "AIzaSyBlho8oNFqDrVHzv3S9mLTZ9T2orAyQ2qQ",
    authDomain: "agro-tourism.firebaseapp.com",
    databaseURL: "https://agro-tourism-default-rtdb.firebaseio.com",
    projectId: "agro-tourism",
    storageBucket: "agro-tourism.appspot.com",
    messagingSenderId: "548181581602",
    appId: "1:548181581602:web:df1dfcb480897b26b6cf7b",
    measurementId: "G-SV7YQZQPRS"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);
  
// reference your database
var contactFormDB = firebase.database().ref("Form");

document.getElementById("Form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var message = getElementVal("message");

  saveMessages(name, email, phone, message);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("Form").reset();
}

const saveMessages = (name, email, phone, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

