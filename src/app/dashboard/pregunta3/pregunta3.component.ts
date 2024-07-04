import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';
import { Pregunta3 } from './pregunta3';
import { Pregunta3Service } from './pregunta3.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pregunta3',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta3.component.html',
  styleUrl: './pregunta3.component.css'
})
export class Pregunta3Component {
  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];
  listados: Pregunta3[]=[]

  constructor(private pregunta3Service:Pregunta3Service){
  }
  
  ngOnInit():void {
    this.pregunta3Service.getAllPregunta3().pipe(
      map((data: Pregunta3[]) => data.filter(item => item.email.endsWith('@garfield.biz')))
    ).subscribe((filteredData) => {this.listados = filteredData;
    });
  }
}
