
var db,idvalue=0;
var docid,Name;
var temp;
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

  // Initialize Firebase
  import { getAuth, signOut} from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";


  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  

firebase.initializeApp(firebaseConfig);

db = firebase.firestore();


document.getElementById("load1").addEventListener("click", (event) => {
    event.preventDefault();
    temp=document.getElementById("sid1").value;


    db.collection('staffList').where("StaffID", "==",temp)
        .get()
        .then((querySnapshot) => {

                 console.log(querySnapshot.size,temp);
                
                if(querySnapshot.size === 1){

                  
                    querySnapshot.forEach((doc) => {

                    console.log(doc.id, " => ", doc.data());
                    const data2 = doc.data();
                    var staff_name = data2.Staffname;
                    var place = data2.Place;
                    var dob = data2.DOB;
                    var salary = data2.Salary;
                    var joindate = data2.joindate;
                    docid = doc.id;
                    document.getElementById("sid1").value = temp;
                    document.getElementById("name1").value = staff_name;
                    document.getElementById("place1").value = place;
                    document.getElementById("dob1").value = dob;
                    document.getElementById("salary1").value = salary;
                    document.getElementById("jdate1").value = joindate;
                });

                               
                    
                }
                else if(querySnapshot.size === 0){
                      
                                     
               
                }
    }
        )
        .catch((error) => {
                alert(error.message);
                
        });

});

var staff_name,place,dob,salary,jdate,sid1;

function upvalues(){

sid1=document.getElementById("sid1").value;
staff_name=document.getElementById("name1").value;
place=document.getElementById("place1").value;
dob=document.getElementById("dob1").value;
salary=document.getElementById("salary1").value;
jdate=document.getElementById("jdate1").value;

console.log(sid1,staff_name,place,dob,salary,jdate);
}


document.getElementById("delete1").addEventListener("click", (event) => {
    event.preventDefault();
    upvalues()


    db.collection('staffList').where("StaffID", "==", temp)
        .get()
        .then((querySnapshot) => {

                 console.log(querySnapshot.size);
                
                if(querySnapshot.size === 1){

                  
                    querySnapshot.forEach((doc) => {

 console.log(doc.data());

                        db.collection('staffList').doc(docid).delete() .then(() => {

                                        alert("Data Deleted Successfully")
                console.log("Document written with ID: ", sid1);
                document.getElementById("sid1").value="";
                document.getElementById("name1").value="";
                document.getElementById("place1").value="";
                document.getElementById("dob1").value="";
                document.getElementById("salary1").value="";
                document.getElementById("jdate1").value="";
                
                
                                    })   
                  });

                               
                    
                }
                
    }
    
        )
        .catch((error) => {
                alert(error.message);
                
        });

});

document.getElementById("logout").addEventListener('click',function(){
        

    signOut(auth).then(() => {
        location.href="index.html";
    }).catch((error) => {
    console.log(error);
    });
})
