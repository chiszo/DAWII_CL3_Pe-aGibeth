import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pregunta2 } from './pregunta2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Pregunta2Service {

  constructor(private httpClient: HttpClient) {}

  getAllPregunta2(): Observable<Pregunta2[]> {
    return this.httpClient.get<any>('https://rickandmortyapi.com/api/character').pipe(
      map(response => response.results as Pregunta2[]));
  }
}
