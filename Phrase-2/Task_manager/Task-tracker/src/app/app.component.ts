import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Task2 } from './newTaskObj';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'task', 'date'];
  newTaskList: MatTableDataSource<Task2>;
  newT: Task2[] = [
    {id: "1", name: 'Hydrogen', task: "1.0079", date: 'H'},
    {id: "2", name: 'Helium', task: "4.0026", date: 'He'}
  ];

  constructor(){
    this.newTaskList = new MatTableDataSource<Task2>(this.newT);
  }

  ngOnInit(): void {}
  
  title = 'Task-tracker';

  //Getting data from the task form
  taskRef = new FormGroup({
    id: new FormControl("", [Validators.required]),
    name: new FormControl("", [Validators.required]),
    task: new FormControl("", [Validators.required]),
    date: new FormControl("", [Validators.required]),
  })

  @ViewChild(MatTable) table!: MatTable<Task2>;

  addTask(){
    let newTaskList2 = this.taskRef.value;
    this.newT.push({id: newTaskList2.id, name: newTaskList2.name, task: newTaskList2.task, date: newTaskList2.date});
    this.table.renderRows();
  }
}
