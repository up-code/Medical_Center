import { Component, OnInit } from '@angular/core';

import {EspecialidadService} from '../../services/especialidad.service';
import { Especialidad } from 'src/app/models/Especialidad';

@Component({
  selector: 'app-especialidad-list',
  templateUrl: './especialidad-list.component.html',
  styleUrls: ['./especialidad-list.component.css']
})
export class EspecialidadListComponent implements OnInit {

  especialidades: any = []; 

  constructor(private especialidadService: EspecialidadService) { }

  ngOnInit(): void {
    this.especialidadService.getEspecialidades().subscribe(
      res => {
        this.especialidades = res;
      },
      err => console.log(err)
    );
  }

}
