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

firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("login.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
    }
})


function logout(){
    firebase.auth().signOut()
}