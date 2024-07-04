import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Pregunta2 } from './pregunta2';
import { Pregunta2Service } from './pregunta2.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component implements OnInit {
  displayedColumns: string[] = ['id', 'name','species'];
  listados: Pregunta2[]=[]

  constructor(private pregunta2Service: Pregunta2Service) {
  }

  ngOnInit(): void {
    this.pregunta2Service.getAllPregunta2().pipe(
      map((data: Pregunta2[]) => data.filter(item => item.species.includes('Human')))
    ).subscribe((filteredData) => {this.listados = filteredData;
    });
  }
}
