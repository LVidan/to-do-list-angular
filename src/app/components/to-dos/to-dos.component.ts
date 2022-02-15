import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  constructor(
    private toDosService: TodosService,
  ) { }

  toDos: any[] = this.toDosService.getToDos();
  isDisabled: boolean = true;


  ngOnInit(): void { }

  addToDo(data: any): void {
    this.toDos.push(data.value);
    data.value = null;
    this.isDisabled = true;
  }

  checkInput(inputData: string): void {
    if (inputData.length !== 0) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }
}
