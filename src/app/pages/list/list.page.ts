import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @ViewChild('lista', {static:false}) lista: IonList;

  usuarios: Observable<any>;

  constructor( private dataService: DataService,
               private toastController : ToastController ) { }

  ngOnInit() {
    this.usuarios=this.dataService.getUsers();
  }

  async presentToast( message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000,
      animated: true,
      color: 'danger',
      translucent: true,
      cssClass: 'animated zoomIn',
      buttons: [
        {
          side: 'start',
          icon: 'thumbs-up-sharp',
          text: 'Ok',
          handler: () => {
            console.log('Favorite clicked');
          }
        }
      ]
    });
    toast.present();
  }

  like(user){
    this.presentToast('Favoritos');
    this.lista.closeSlidingItems();
  }
  
  delete(user){
    this.presentToast('Borrado');
    this.lista.closeSlidingItems();
  }
  
  share(user){
    this.presentToast('Compartido');
    this.lista.closeSlidingItems();
  }

}
