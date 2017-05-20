import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TarefasService } from '../../providers/tarefas-service';
import { CheckListService } from '../../providers/check-list-service';

/*
  Generated class for the ItemCheck page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-check',
  templateUrl: 'item-check.html'
})
export class ItemCheckPage {

  tarefas: any[];
  codigoItem: number;
  codigoTarefa: number;
  nomeItem: string;
  novo: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tarefasService: TarefasService,
    public checkListService : CheckListService) {

    this.codigoItem = navParams.get('codigo');
    this.novo = navParams.get('novo');
    this.tarefas = tarefasService.getTarefas();

    if (!this.novo) {



    } else {
      this.codigoItem = this.checkListService.ultimoCodigo;
      this.codigoTarefa = 0;
      this.nomeItem = '';
    }

  }

  incluir() {
    this.checkListService.addCheckList(this.nomeItem, this.codigoTarefa);
    this.navCtrl.pop();

   }

}
