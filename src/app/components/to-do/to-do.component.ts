import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() allToDos: any;

  removeToDo(selectedToDo: any): void {
    const selectedToDoIndex: number = this.allToDos.indexOf(selectedToDo)
    if (selectedToDoIndex > -1) {
      this.allToDos.splice(selectedToDoIndex, 1);
    }
  }
}
