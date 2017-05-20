import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjetosService {

  projetos = [
    { codigo: 1, nome: 'Algoritmos' },
    { codigo: 2, nome: 'Pós-Graduação' },
    { codigo: 3, nome: 'EAD' }
  ];
  ultimoCodigo = 3;

  getProjetos() {
    return this.projetos;
  }

  editProjeto(c: number, n: string) {

    for (let i = 0; i < this.projetos.length; i++) {
      if (this.projetos[i].codigo == c) {
        this.projetos[i].nome = n;
        break;
      }
    }
  }

  deleteProjeto(c: number) {
    for (let i = 0; i < this.projetos.length; i++) {
      if (this.projetos[i].codigo == c) {
        this.projetos.splice(i, 1);
        break;
      }
    }
  }

  addProjeto(n: string) {
    this.ultimoCodigo++;
    this.projetos.push({
      codigo: this.ultimoCodigo,
      nome: n
    });

  }

}
