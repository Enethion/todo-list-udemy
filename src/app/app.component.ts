import { Component } from '@angular/core';
import { Task } from './task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editMode: boolean = false;
  taskName: string = "Wypij kawę";
  taskDate: string = ""
  config: { [key: string]: string } | null = null;
  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: true,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout( () => {
      this.config = {
        title: 'Lista Zadań',
        footer: '© Lista zadań,All rights reserved.',
        date: new Date().toDateString()
      },
      500
    })
  }

  clearTasks() {
    this.tasks = []
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.taskDate,
      done: false
    }
    this.tasks.push(task)
    this.taskName = ""
    this.taskDate = ""
  }

  toggleEditMode() {
    this.editMode = !this.editMode
  }

  markTaskAsDone(task: Task){
    task.done = true
  }

  deleteTask(task: Task){
    this.tasks = this.tasks.filter(e => e !== task)
  }

  get taskList() {
    this.sortTasks()
    return this.tasks
  }

  private sortTasks() {
    this.tasks = this.tasks.sort( (a: Task, b: Task) => 
      a.done === b.done ? 0 : a.done ? 1 : -1
    )
  }
}
