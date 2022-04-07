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
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var gender = getElementVal("gender");
  var phone = getElementVal("phone");
  var email = getElementVal("email");
  var password = getElementVal("password");

  saveMessages(name, gender, phone, email, password);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, gender, phone, email, password) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    gender: gender,
    phone: phone,
    email: email,
    password: password
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

document.getElementById("loginForm").addEventListener("submit",(event)=>{
  event.preventDefault()
})

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
      location.replace("welcome.html")
  }
})
