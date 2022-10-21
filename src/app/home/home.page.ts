import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  handleCalculator(){
    console.log("Evento onClick: Calculando...");
  }

  async showMessage() {
    const toast = await this.toastController.create({
      message:'Clicou',
      duration:3000
    });

    toast.present();

  }
}
