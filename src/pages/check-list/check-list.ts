import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CheckListService } from '../../providers/check-list-service';
import { TarefasService } from '../../providers/tarefas-service';

import { ItemCheckPage } from '../item-check/item-check';

@Component({
  selector: 'page-check-list',
  templateUrl: 'check-list.html'
})
export class CheckListPage {

  checkList: any[];
  tarefas: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public checklistService: CheckListService,
    public tarefasService: TarefasService,
    public alertCtrl: AlertController) {

    this.showAlert();
    this.checkList = checklistService.getCheckList();
    this.tarefas = tarefasService.getTarefas();
    this.ordenaLista();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Check-List',
      subTitle: 'Os seus itens estão ordenados por ordem alfabética. A medida que for concluindo, eles estarão no final da lista!',
      buttons: ['OK']
    });
    alert.present();
  }

  nomeTarefa(c): string {
    for (let i = 0; i < this.tarefas.length; i++)
      if (this.tarefas[i].codigo == c)
        return "Tarefa: " + this.tarefas[i].descricao;
    return "Sem Tarefa Associada!"

  }

  novoItem() {
    this.navCtrl.push(ItemCheckPage, { codigo: 0, novo: true });
    this.ordenaLista();
  }

  marca(c) {
    c.classe = c.classe == "tachado" ? "" : "tachado";
    this.ordenaLista();
  }

  ordenaLista() {
    this.checkList.sort(function (a, b) {
      if (a.classe > b.classe) return 1;

      else if (a.classe == b.classe) {
        if (a.nome > b.nome) return 1;
        if (a.nome == b.nome) return 0;
        else return -1;
      }
      if (a.classe < b.classe) {
        return -1;
      }
    }
    );
  }

}
