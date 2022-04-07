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
  
  document.getElementById("contactForm").addEventListener("submit",(event)=>{
    event.preventDefault()
  })

  function signUp() {

    // Fetching value from a html input fields with id
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Fetching additional informations
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    
    // Performing Sign Up Operation
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Updating additional information
        const user = userCredential.user;
        user.updateProfile({
          name,
          phone
        });
        
      })
      .catch((error) => {
        document.getElementById("error").innerHTML = error.message
     });
  };
  