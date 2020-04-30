import { Component, OnInit, HostBinding } from '@angular/core';

import {GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

@HostBinding('class') classes = 'row'; 

 games : any = [];

  constructor(private service: GamesService) { }

  ngOnInit() {
       this.getGames();
  }

  getGames(){
    this.service.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err));
  }

  deleteGame(id: string){
    
    this.service.deleteGame(id).subscribe( 
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
      )
  }

  editGame(id: string) {
    console.log(id);
  }

}
