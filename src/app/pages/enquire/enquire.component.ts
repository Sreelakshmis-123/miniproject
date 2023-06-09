import { Component } from '@angular/core';
import { Firestore,collection,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.css']
})
export class EnquireComponent {
  email : string ='' ;
  name : string ='' ;
  message : string ='' ;
  phone : string ='' ;
  lastname : string ='' ;
  constructor(private router:Router,private firestore:Firestore){}
  
  addData(f:any)
  {
    if(this.email == ''){
      alert('please enter email')
      return;
    }
    if(this.message == ''){
      alert('please enter  message')
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
    const collectionInstance =collection(this.firestore,'enquirydata');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('data saved successfully')
      alert('send successful');
      this.router.navigate(['']);
    })
    .catch((err)=>{
   console.log(err);
    })
  }
  }
  
  
  
  

