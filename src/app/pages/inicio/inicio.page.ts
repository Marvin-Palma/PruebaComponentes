import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {Componente} from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]> = this.dataService.getMenu();

  constructor( private menuController: MenuController,
    private dataService: DataService) { }

  ngOnInit() {
    
  }

  toggleMenu(){
    this.menuController.toggle();
  }

}