import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  private URL_TODO: string = "./assets/json/toDos.json";

  getToDos() {
    return this.http.get(this.URL_TODO);
  }
}
