 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyDp9NwwHonm1sR3_n76CNY5ZMGowjMO_oY",
   authDomain: "salary-generator.firebaseapp.com",
   projectId: "salary-generator",
   storageBucket: "salary-generator.appspot.com",
   messagingSenderId: "1059301219890",
   appId: "1:1059301219890:web:751a53be941b225bec662b",
   measurementId: "G-B59PCPV7TV"
};


 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";



document.getElementById("login1").addEventListener('click',function(){
    const email1=document.getElementById("elogin").value
    const password1=document.getElementById("plogin").value

        signInWithEmailAndPassword(auth, email1, password1)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                  
                    
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage);
                document.getElementById("lbuser").style.visibility="visible";

            });
        })

        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                
                window.location.replace("index.html");
            } else {
                // User is signed out
                window.location.replace("home.html")
            }
        });

       