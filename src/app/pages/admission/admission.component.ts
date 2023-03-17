import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {

  age : string ='' ;
  name : string ='' ;
  address : string ='' ;
  admission : string ='' ;
  phone : string ='' ;
  constructor(private router:Router,private firestore:Firestore){}
  
  addData(f:any)
  {
    if(this.age == ''){
      alert('please enter age')
      return;
    }
    if(this.address == ''){
      alert('please enter  adress')
      return;
    }
    if(this.name == ''){
      alert('please enter name')
      return;
    }
    if(this.phone == ''){
      alert('please enter phone no')
      return;
    }
    const collectionInstance =collection(this.firestore,'admissiondata');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('data saved successfully')
      alert('admission successful');
      this.router.navigate(['']);
    })
    .catch((err)=>{
   console.log(err);
    })
  }
  }
  
  
  
  
