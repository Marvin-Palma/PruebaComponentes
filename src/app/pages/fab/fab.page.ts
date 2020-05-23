import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data = [
    {
      nombreCampo: 'Campo 1 ',
      tipoCampo : 'text',
      longitud: '1'
    },
    {
      nombreCampo: 'Campo 2 ',
      tipoCampo : 'text',
      longitud: '3'
    },
    {
      nombreCampo: 'Campo 3 ',
      tipoCampo : 'text',
      longitud: '3'
    },
    {
      nombreCampo: 'Campo 3 ',
      tipoCampo : 'text',
      longitud: '3'
    },
    {
      nombreCampo: 'Campo 3 ',
      tipoCampo : 'text',
      longitud: '3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
