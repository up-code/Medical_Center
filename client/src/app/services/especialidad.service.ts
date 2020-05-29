import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { Paciente } from '../models/Paceinte'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
   
  constructor(private http: HttpClient) {}
  API_URi = 'http://localhost:3000/api';
  //zona donde interactua la interfaz con la API REST

    getGames(){
      return this.http.get('http://localhost:3000/api/paciente');
    }

    getGame(id: string){
      return this.http.get('http://localhost:3000/api/paciente/'+id);
    }
   
   saveGame(paciente: Paciente){
     return this.http.post('http://localhost:3000/api/paciente', paciente);
   }

   deleteGame(id: string){
     return this.http.delete('http://localhost:3000/api/paciente/'+id);
   }

   updateGame(id: string | number, paciente: Paciente){
     return this.http.put('http://localhost:3000/api/paciente/'+id, paciente);
   }

}
