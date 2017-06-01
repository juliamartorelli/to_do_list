import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TarefasService } from '../../providers/tarefas-service';
import { ProjetosService } from '../../providers/projetos-service';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-tarefa',
  templateUrl: 'tarefa.html'
})

export class TarefaPage {

  projetos: any[];
  descricao: string;
  codigoProjeto: number;
  codigoTarefa: number;
  prioridade: number;
  data: string;
  d: Date;

  novo: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tarefasServico: TarefasService,
    public projetosService: ProjetosService,
    public calendario: Calendar,
    public alertCtrl: AlertController) {

    this.projetos = projetosService.getProjetos();
    this.codigoTarefa = navParams.get('codigo');
    this.novo = navParams.get('novo');

    if (!this.novo) {
      let tarefas = this.tarefasServico.getTarefas();
      for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].codigo == this.codigoTarefa) {
          this.descricao = tarefas[i].descricao;
          this.codigoProjeto = tarefas[i].projeto;
          this.prioridade = tarefas[i].prioridade;
          this.d = tarefas[i].data;
          this.data = this.d.getFullYear() + "-" +
            ("0" + (this.d.getMonth() + 1)).substr(-2, 2) + "-" +
            ("0" + (this.d.getDate())).substr(-2, 2);

        }
      }
    } else {
      this.codigoTarefa = this.tarefasServico.ultimoCodigo;
      this.descricao = '';
      this.codigoProjeto = this.projetos[0].codigo;
      this.prioridade = 3;
      this.d = new Date();
      this.data = this.d.getFullYear() + "-" +
        ("0" + (this.d.getMonth() + 1)).substr(-2, 2) + "-" +
        ("0" + (this.d.getDate())).substr(-2, 2);
    }
  }

  public saveCalendar(): void {

    let d = new Date();
    d.setDate(this.d.getDate());
    d.setMonth(this.d.getMonth());
    d.setFullYear(this.d.getFullYear());

    this.calendario.createEventInteractively(this.descricao, '', '', d, d).then(
      (msg) => {console.log(msg);},
      (err) => {console.log(err);}
    );
  }

  alterar() {
    let d = new Date(
      parseInt(this.data.substr(0, 4)),
      parseInt(this.data.substr(5, 2)),
      parseInt(this.data.substr(8, 2)));
    
    d.setMonth(d.getMonth() - 1);

    this.tarefasServico.editTarefas(this.codigoTarefa, this.descricao, this.codigoProjeto, d, this.prioridade);
    this.navCtrl.pop();
  }

  excluir() {
    this.tarefasServico.deleteTarefa(this.codigoTarefa);
    this.navCtrl.pop();
  }

  incluir() {
    let d = new Date(
      parseInt(this.data.substr(0, 4)),
      parseInt(this.data.substr(5, 2)),
      parseInt(this.data.substr(8, 2)));

    d.setMonth(d.getMonth() - 1);

    this.tarefasServico.addTarefa(this.descricao, this.codigoProjeto, d, this.prioridade);
    this.navCtrl.pop();
  }
}

