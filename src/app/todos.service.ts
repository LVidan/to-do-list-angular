import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  private allToDos: any[] = [];

  getToDos() {
    return this.allToDos;
  }
}
