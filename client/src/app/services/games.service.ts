import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Games'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
   
  constructor(private http: HttpClient) {}
  API_URi = 'http://localhost:3000/api';
  //zona donde interactua la interfaz con la API REST

    getGames(){
      return this.http.get('http://localhost:3000/api/games');
    }

    getGame(id: string){
      return this.http.get('http://localhost:3000/api/games/'+id);
    }
   
   saveGame(game: Game){
     return this.http.post('http://localhost:3000/api/games', game);
   }

   deleteGame(id: string){
     return this.http.delete('http://localhost:3000/api/games/'+id);
   }

   updateGame(id: string | number, game: Game){
     return this.http.put('http://localhost:3000/api/games/'+id, game);
   }

}
