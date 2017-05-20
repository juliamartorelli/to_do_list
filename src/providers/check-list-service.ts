import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CheckListService {

  checkList = [
    { codigo: 1, nome: 'Leitura da atividade PRC', codTarefa: 0, classe:"" },
    { codigo: 2, nome: 'Comprar livro de ATP', codTarefa: 1, classe:""  },
    { codigo: 3, nome: 'Comprar livro de Engenharia de Software', codTarefa: 1, classe:""  },
    { codigo: 4, nome: 'Corrigir as provas', codTarefa: 2, classe:""  },
    { codigo: 5, nome: 'Lançar notas', codTarefa: 2, classe:""  },
    { codigo: 6, nome: 'Publicar notas', codTarefa: 2, classe:""  },
  ];
  ultimoCodigo = 6;

  getCheckList() {
    return this.checkList;
  }

  editCheckList(c: number, n: string, codTarefa: number) {

    for (let i = 0; i < this.checkList.length; i++) {
      if (this.checkList[i].codigo == c) {
        this.checkList[i].nome = n;
        this.checkList[i].codTarefa = codTarefa;
        break;
      }
    }
  }

  deleteCheckList(c: number) {
    for (let i = 0; i < this.checkList.length; i++) {
      if (this.checkList[i].codigo == c) {
        this.checkList.splice(i, 1);
        break;
      }
    }
  }

  addCheckList(n: string, codT: number) {
    this.ultimoCodigo++;
    this.checkList.push({
      codigo: this.ultimoCodigo,
      nome: n,
      codTarefa: codT,
      classe: ""
    });

  }

}
