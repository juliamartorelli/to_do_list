import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TarefasService {

  tarefas = [
    {
      codigo: 1, projeto: 1, descricao: 'Elaborar primeira prova',
      data: new Date(2017, 3, 10), prioridade: 1
    },
    {
      codigo: 2, projeto: 1, descricao: 'Fechar diário',
      data: new Date(2017, 6, 30), prioridade: 2
    },
    {
      codigo: 3, projeto: 2, descricao: 'Gravar Video de Apresentação',
      data: new Date(2017, 7, 1), prioridade: 1
    },
    {
      codigo: 4, projeto: 3, descricao: 'Planejar Campanha',
      data: new Date(2017, 3, 10), prioridade: 3
    },
  ];
  ultimoCodigo = 4;

  constructor(public http: Http) {

  }
  getTarefas(): any[] {
    return this.tarefas;
  }

  editTarefas(codTarefa: number, descricao: string, codProjeto: number, data: Date, prioridade: number) {

    for (let i = 0; i < this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codTarefa) {
        this.tarefas[i].projeto = codProjeto;
        this.tarefas[i].descricao = descricao;
        this.tarefas[i].prioridade = prioridade;
        this.tarefas[i].data = data;

        break;
      }
    }
  }

  deleteTarefa(codTarefa: number) {
    for (let i = 0; i < this.tarefas.length; i++) {
      if (this.tarefas[i].codigo == codTarefa) {
        this.tarefas.splice(i, 1);
        break;
      }
    }
  }

  addTarefa( desc: string, codProjeto: number, dta: Date, pri: number) {
    this.ultimoCodigo++;
    this.tarefas.push({
      codigo: this.ultimoCodigo,
      projeto: codProjeto,
      descricao: desc,
      prioridade: pri,
      data: dta
    });

  }

}
