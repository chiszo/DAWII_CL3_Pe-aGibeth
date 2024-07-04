import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta3 } from './pregunta3';

@Injectable({
  providedIn: 'root'
})
export class Pregunta3Service {

  constructor(private httpClient: HttpClient) { }

  getAllPregunta3():Observable<Pregunta3[]>{
    return this.httpClient.get<Pregunta3[]>("https://jsonplaceholder.typicode.com/comments");
  }
}
