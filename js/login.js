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
  firebase.analytics();

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

// firebase.auth().onAuthStateChanged((user)=>{
//     if(user){
//         location.replace("welcome.html")
//     }
// })
function login(){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
  }
  
  

function forgotPass(){
    const email = document.getElementById("email").value
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        alert("Reset link sent to your email id")
    })
    .catch((error) => {
        document.getElementById("error").innerHTML = error.message
    });
}