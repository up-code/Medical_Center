import { Component, OnInit } from '@angular/core';

import {TiposService} from '../../services/tipos.service';
import {TipoUsuario} from '../../models/TipoUsuario';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.css']
})
export class TiposComponent implements OnInit {

  types: any = [];

  constructor(private typeUsrService: TiposService) { }

  ngOnInit(): void {
    this.typeUsrService.getTipoUsers().subscribe(
      res => {
        this.types = res;
      },
      err => console.log(err)
    )
  }

}
