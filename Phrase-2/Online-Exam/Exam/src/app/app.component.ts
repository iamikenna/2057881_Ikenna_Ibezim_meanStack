import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Exam';
  cnt: number = 0;
  answers: any = {"one":"10", "two":"15", "three":"55", "four":"45", "five":"95", "six":"17", "seven": "8", "eight": "6", "nine": "56", "ten": "54"}

  form = new FormGroup({
    one:new FormControl("",[Validators.required]),
    two:new FormControl("",[Validators.required]),
    three:new FormControl("",[Validators.required]),
    four:new FormControl("",[Validators.required]), 
    five:new FormControl("",[Validators.required]),
    six:new FormControl("",[Validators.required]),
    seven:new FormControl("",[Validators.required]),
    eight:new FormControl("",[Validators.required]),
    nine:new FormControl("",[Validators.required]),
    ten:new FormControl("",[Validators.required])
  })

  // constructor(public form: FormBuilder){
  //   this.myForm=form.group({});
  // }

  ngOnInit(): void {
    // this.allQuestion.forEach(q=> {
    //   this.myForm?.addControl(q.question,this.form.control(""));
    //                           //user:new FormControl();
    //                           //q.question
    // })
  }

  submit(){
    let Regs = this.form.value;

    if(Regs.one.split(" ")[0] !== this.answers.one){
      let change: any = document.getElementById(Regs.one.split(" ")[1])
      change.style.color = "RED"
    }
    else{
      let change: any = document.getElementById(Regs.one.split(" ")[1])
      console.log(`if true show value ${change}`)
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    
    if(Regs.two.split(" ")[0] !== this.answers.two){
      let change: any = document.getElementById(Regs.two.split(" ")[1]);
      change.style.color = "RED";
    }
    else{
      let change: any = document.getElementById(Regs.two.split(" ")[1])
      change.style.color = "GREEN";
      this.cnt += 10;
    }

    if(Regs.three.split(" ")[0] !== this.answers.three){
      let change: any = document.getElementById(Regs.three.split(" ")[1])
      change.style.color = "RED"      
    }
    else{
      let change: any = document.getElementById(Regs.three.split(" ")[1])
      change.style.color = "GREEN";
      this.cnt += 10;
    }

    if(Regs.four.split(" ")[0] !== this.answers.four){
      let change: any = document.getElementById(Regs.four.split(" ")[1]) 
      change.style.color = "RED"
    }
    else{
      let change: any = document.getElementById(Regs.four.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    if(Regs.five.split(" ")[0] == this.answers.five){
      let change: any = document.getElementById(Regs.five.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    else{
      let change: any = document.getElementById(Regs.five.split(" ")[1]) 
      change.style.color = "RED"
    }
    if(Regs.six.split(" ")[0] == this.answers.six){
      let change: any = document.getElementById(Regs.six.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    else{
      let change: any = document.getElementById(Regs.six.split(" ")[1])
      change.style.color = "RED"
    }
    if(Regs.seven.split(" ")[0] == this.answers.seven){
      let change: any = document.getElementById(Regs.seven.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    else{
      let change: any = document.getElementById(Regs.seven.split(" ")[1]) 
      change.style.color = "RED"
    }
    if(Regs.eight.split(" ")[0] == this.answers.eight){
      let change: any = document.getElementById(Regs.eight.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    else{
      let change: any = document.getElementById(Regs.eight.split(" ")[1]) 
      change.style.color = "RED"
    }
    if(Regs.nine.split(" ")[0] == this.answers.nine){
      let change: any = document.getElementById(Regs.nine.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    else{
      let change: any = document.getElementById(Regs.nine.split(" ")[1]) 
      change.style.color = "RED"
    }
    if(Regs.ten.split(" ")[0] == this.answers.ten){
      let change: any = document.getElementById(Regs.ten.split(" ")[1]) 
      change.style.color = "GREEN";
      this.cnt += 10;
    }
    else{
      let change: any = document.getElementById(Regs.ten.split(" ")[1]) 
      change.style.color = "RED"
    }

    // Adding a new P tag to the existing Div tag
    var tag = document.createElement("p");
    var text: any= document.createTextNode(`Test Result is ${this.cnt}%`)
    tag.appendChild(text)
    var element: any = document.getElementById("result") 
    element.appendChild(tag)

    if (this.cnt < 70){
      var color: any = document.getElementById("result");
      color.style.color = "red";
    }
    else{
      var color: any = document.getElementById("result");
      color.style.color = "green";
    }
  }
}
