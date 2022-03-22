var db;
var docid,Name,CostItem,PartyAmnt;

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


let data2;
let tr = 0;
let ab;
var count = 0;
var days,salary,advance,onedaysalary,dayssal,deduct,tot;
function deduction(salary,days,advance){

      onedaysalary=parseInt(parseInt(salary)/30);
      console.log(onedaysalary)
      dayssal=parseInt(onedaysalary*days);
      console.log(dayssal)
      console.log(advance)
      deduct=parseInt(parseInt(advance)+dayssal);
      console.log(deduct)
      
      return deduct;

}
function total(salary,deduct){
    tot=Number(parseInt(salary)-deduct);
    return tot;
}



db.collection('staffList').get()
.then(querySnapshot1=>{querySnapshot1.forEach(doc=>{let data = doc.data();
          let deduce=deduction(data.Salary,data.Absent,data.Advance)
          let salarytotal=total(data.Salary,deduct)      
            let row  = `<tr>
                            <td>${data.StaffID}</td>
                            <td>${data.Staffname}</td>
                            <td>${data.Salary}</td>
                            <td>${data.Advance}</td>
                            <td>${data.Absent}</td>
                            <td>${deduce}</td>
                            <td>${salarytotal}</td>
                      </tr>`;
            let table = document.getElementById('table1')
            table.innerHTML += row
            /*loading.style.display = "none";*/
          }) 
        })
    
  

    
 

    .catch(err=>{
        console.log(`Error: ${err}`)
    });

    document.getElementById("logout").addEventListener('click',function(){
        

      signOut(auth).then(() => {
          location.href="index.html";
      }).catch((error) => {
      console.log(error);
      });
})