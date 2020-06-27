import { Component, OnInit } from '@angular/core';

import {PacienteService} from '../../services/paciente.service';
import { Paciente } from 'src/app/models/Paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {


  pacientes: any = []; 
   
  constructor(private ps: PacienteService) { }

  ngOnInit(): void {
    
    this.ps.getPacientes().subscribe(
      res => {this.pacientes = res},
      err=> console.log(err)
    )
    
  }

}
