import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.scss']
})
export class ToDosComponent implements OnInit {

  constructor(
    public toDosService: TodosService
  ) { }

  toDos: any = this.toDosService.getToDos();

  ngOnInit(): void { }

  addToDo(): void {
    console.log('alo');
  }
}
