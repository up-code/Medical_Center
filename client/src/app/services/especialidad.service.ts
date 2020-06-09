import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


import { Especialidad } from '../models/Especialidad'; 
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {
   
  constructor(private http: HttpClient) {}
  API_URi = 'http://localhost:3000/api';
  //zona donde interactua la interfaz con la API REST

    getEspecialidades(){
      return this.http.get('http://localhost:3000/api/especialidad');
    }

    getEspecialidad(id: string){
      return this.http.get('http://localhost:3000/api/especialidad/'+id);
    }
   
   saveEspecialidad(especialidad: Especialidad){
     return this.http.post('http://localhost:3000/api/especialidad', especialidad);
   }

   deleteEspecialidad(id: string){
     return this.http.delete('http://localhost:3000/api/especialidad/'+id);
   }

   updateEspecialidad(id: string | number, especialidad: Especialidad):Observable<Especialidad>{
     return this.http.put('http://localhost:3000/api/especialidad/'+id, especialidad);
   }

}
