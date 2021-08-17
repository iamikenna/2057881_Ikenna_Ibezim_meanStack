import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Contact} from './newContact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'portfolio';
  
  msg:string= ""
  msgR:string= ""
  regFname:string = ""
  regLname:string = ""
  regUname:string = ""
  regPass:string = ""

  contactNew: Array<Contact>=new Array();
  
  public showReg:boolean = false;
  public showPort:boolean = false;
  public showLogin:boolean = true;

  // Used for sign in into app
  loginRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  // Used for registration
  SignupRef = new FormGroup({
    fname:new FormControl("",[Validators.required]),
    lname:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })

  //Used for adding contacts
  ContactRef = new FormGroup({
    cname:new FormControl("",[Validators.required]),
    pnumber:new FormControl("",[Validators.required])
  })

  addContact(){
    let contactNew1 = this.ContactRef.value
    this.contactNew.push(new Contact(contactNew1.cname, contactNew1.pnumber))
  }

  addUser(){
    let Regs = this.SignupRef.value
    this.regFname = Regs.fname
    this.regLname = Regs.lname
    this.regUname = Regs.username
    this.regPass = Regs.pass

    if (Regs.fname.length == 0 || Regs.lname.length == 0 || Regs.username.length == 0 || Regs.pass.length == 0){
      this.msgR = "Can't leave Field blank"
    }
    else{
      this.showHide('signin')
    }
  }

  checkUser(){
    let login = this.loginRef.value

    // Checking for empty entries
    if(login.username.length !== 0 || login.pass.length !== 0){
      if(login.username===this.regUname && login.pass===this.regPass){
        this.msg = "Successfully Login!"
        this.showHide('welcome')
      }
      else{
        this.msg  = "Wrong Username or Password, Please try again!"
      }
    }
    else{
      this.msg  = "Fields can't be left empty!"
    }
    this.loginRef.reset();
  }

  showHide(data: string){
    if (data == "signup"){
      this.showReg = true;
      this.showLogin = false;
    }
    else if(data == "signin"){
      this.showReg = false;
      this.showLogin = true;
    }
    else if(data == "welcome"){
      this.showPort = true
      this.showLogin = false;
    }
  }
}
