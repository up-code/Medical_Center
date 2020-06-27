import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule}from '@angular/common/http'

import { Paciente } from '../models/Paciente'; 
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor( private http: HttpClient) { }



  getPacientes(){
    return this.http.get('http://localhost:3000/api/paciente');
  }

  getEspecialidad(id: string){
    return this.http.get('http://localhost:3000/api/paciente/'+id);
  }
 
 saveEspecialidad(paciente: Paciente){
   return this.http.post('http://localhost:3000/api/paciente', paciente);
 }

 deleteEspecialidad(id: string){
   return this.http.delete('http://localhost:3000/api/paciente/'+id);
 }

 updateEspecialidad(id: string | number, paciente: Paciente):Observable<Paciente>{
   return this.http.put('http://localhost:3000/api/paciente/'+id, paciente);
 }
}
