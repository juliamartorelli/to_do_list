import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProjetosPage } from '../pages/projetos/projetos';
import { ProjetoPage } from '../pages/projeto/projeto';
import { TabsPage } from '../pages/tabs/tabs';
import { TarefasPage, Filtro } from '../pages/tarefas/tarefas';
import { TarefaPage } from '../pages/tarefa/tarefa';
import { ItemCheckPage } from '../pages/item-check/item-check';
import { CheckListPage } from '../pages/check-list/check-list';

import { Calendar } from '@ionic-native/calendar';

import { ProjetosService } from '../providers/projetos-service';
import { TarefasService } from '../providers/tarefas-service';
import { CheckListService } from '../providers/check-list-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    TarefaPage,
    ItemCheckPage,
    CheckListPage,
    Filtro
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage,
    ItemCheckPage,
    CheckListPage,
    TarefaPage
  ],
  providers: [
    StatusBar,
    SplashScreen, Calendar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProjetosService,
    TarefasService,
    CheckListService
  ]
})
export class AppModule { }
