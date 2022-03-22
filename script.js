var db;

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";

const firebaseConfig = {

  apiKey: "AIzaSyDp9NwwHonm1sR3_n76CNY5ZMGowjMO_oY",
    authDomain: "salary-generator.firebaseapp.com",
    projectId: "salary-generator",
    storageBucket: "salary-generator.appspot.com",
    messagingSenderId: "1059301219890",
    appId: "1:1059301219890:web:751a53be941b225bec662b",
    measurementId: "G-B59PCPV7TV"

};

import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";


const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

firebase.initializeApp(firebaseConfig);

db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });



var size;
db.collection('staffList').get().then(snap => {
   size = snap.size;
   size=size+1;
   document.getElementById("sid1").value = size;
   console.log(size);
});


var staff_name,place,dob,salary,jdate,sid1,advance,absent;

function values(){

sid1=document.getElementById("sid1").value;
staff_name=document.getElementById("name1").value;
place=document.getElementById("place1").value;
dob=document.getElementById("dob1").value;
salary=document.getElementById("salary1").value;
jdate=document.getElementById("jdate1").value;
advance="0";
absent="0";

console.log(sid1,staff_name,place,dob,salary,jdate);
}
//--------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------Acc Creation Process----------------------------------------------------------

    document.getElementById("submit1").addEventListener("click", ()=>{
        
        document.getElementById("submit1").disabled = true

    if (
        size!== "" &&
        staff_name !== "" &&
        place !== "" &&
        dob !==""&& 
        salary!==""&&
        jdate!=="") {
        
            values();
        db.collection('staffList').doc(sid1)
        .set({
                StaffID: sid1,
                Staffname: staff_name,
                Place: place,
                DOB:dob,
                Salary: salary,
                joindate:jdate,
                Advance:advance,
                Absent:absent
                
            })

            .then(() => {
                alert("Data Added Successfully")
                console.log("Document written with ID: ", sid1);
                document.getElementById("sid1").value="";
                document.getElementById("name1").value="";
                document.getElementById("place1").value="";
                document.getElementById("dob1").value="";
                document.getElementById("salary1").value="";
                document.getElementById("jdate1").value="";
                
                
            })
            .catch((error) => {
                console.error("Error adding document: ", error.message);
                alert(error.message);
            });

            } else { 
	alert("Please enter all values in fields");
}
      });


      document.getElementById("logout").addEventListener('click',function(){
        

        signOut(auth).then(() => {
            location.href="index.html";
        }).catch((error) => {
        console.log(error);
        });
})