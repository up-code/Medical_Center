import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { TipoUsuario } from '../models/TipoUsuario'; 

@Injectable({
  providedIn: 'root'
})
export class TiposService {

  constructor(private http: HttpClient) { }

  API_URi = 'http://localhost:3000/api';
  //zona donde interactua la interfaz con la API REST

    getTipoUsers(){
      return this.http.get('http://localhost:3000/api/tipoUsuario');
    }

    getTipoUser(id: string){
      return this.http.get('http://localhost:3000/api/tipoUsuario/'+id);
    }
   
   saveTipoUser(tipoUser: TipoUsuario){
     return this.http.post('http://localhost:3000/api/tipoUsuario', tipoUser);
   }

   deleteTipoUser(id: string){
     return this.http.delete('http://localhost:3000/api/tipoUsuario/'+id);
   }

   updateTipoUser(id: string | number, tipoUser: TipoUsuario){
     return this.http.put('http://localhost:3000/api/tipoUsuario/'+id, tipoUser);
   }

}
