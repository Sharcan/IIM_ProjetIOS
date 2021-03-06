import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { StationMainComponent } from './pages/stations/station-main/station-main.component';
import { TitresMainComponent } from './pages/titres/titres-main/titres-main.component';
import { InformationsMainComponent } from './pages/infos/informations-main/informations-main.component';
import { AddStationComponent } from './pages/stations/add-station/add-station.component';
import { TrajectComponent } from './pages/traject/traject.component';
import { TitreInformationComponent } from './pages/titres/titre-information/titre-information.component';
import {ReglagesComponent} from './pages/reglages/reglages.component';
import { TitreNavigoComponent } from './pages/titres/titre-navigo/titre-navigo.component';
import { TitrePerduComponent } from './pages/titres/titre-navigo/titre-perdu/titre-perdu.component';
import { TitreRenouvelerComponent } from './pages/titres/titre-navigo/titre-renouveler/titre-renouveler.component';
import { TitreResilierComponent } from './pages/titres/titre-navigo/titre-resilier/titre-resilier.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'stations',
    component: StationMainComponent
  },
  {
    path: 'addstation',
    component: AddStationComponent
  },
  {
    path: 'titres',
    component: TitresMainComponent
  },
  {
    path: 'informations',
    component: InformationsMainComponent
  },
  {
    path: 'traject',
    component: TrajectComponent
  },
  {
    path: 'titreinformation',
    component: TitreInformationComponent
  },
  { path : 'reglages',
    component: ReglagesComponent
  },
  {path : 'navigo',
    component: TitreNavigoComponent
  },
  {path : 'titreperdu',
    component: TitrePerduComponent
  },
  {path : 'titrerenouveler',
    component: TitreRenouvelerComponent
  },
  {path : 'titreresilier',
    component: TitreResilierComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
