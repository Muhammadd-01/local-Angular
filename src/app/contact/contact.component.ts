import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
showdata(email:any,name:any,message:any){
  alert("The email is :" + email+"\n"+"The name is : "+name+"\n"+" The message is : "+message);
}
}
