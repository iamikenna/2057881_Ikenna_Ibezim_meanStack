import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  name: string = "Ikenna Ibezim";
  age: number = 25;
  result: boolean = true;
  id: number = 32;
}
