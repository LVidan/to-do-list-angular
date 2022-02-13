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

  toDos: any;
  errorMsg: string;

  ngOnInit(): void {
    this.toDosService.getToDos().subscribe({
      next: data => {
        this.toDos = data;
        console.log(this.toDos, this.toDos.length);
      },
      error: err => {
        this.errorMsg = err;
      }
    })
  }
}
