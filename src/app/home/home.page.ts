import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peso: number;
  altura: number;

  constructor(private toastController: ToastController) {}

  isFormValid(){
    return(this.peso && this.altura && this.peso > 0 && this.altura > 0);

  }

  handleCalculator(){
    const imc = this.peso / (this.altura * this.altura );
    //(Math.exp(this.altura)))
    this.showMessage(`IMC = ${imc.toFixed(2)}`); // String literal for concat label and var
  }

  async showMessage(msg : string) {

    //Line 26-29 lida com a acao de criar varios toast

    const previousToast = await this.toastController.getTop();
    if(previousToast){
      await this.toastController.dismiss();
    }
    const toast = await this.toastController.create({
      message:msg,
      color:'medium',
      //duration:3000
      buttons:[{
        icon:'close'
      }]
    });

    toast.present();

  }
}
