import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;

  usuario = {
    email: '',
    password: '',
    telefono: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log(this.usuario);
  }

}
