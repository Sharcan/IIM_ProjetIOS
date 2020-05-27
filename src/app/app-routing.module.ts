import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { StationMainComponent } from './pages/stations/station-main/station-main.component';
import { TitresMainComponent } from './pages/titres/titres-main/titres-main.component';
import { InformationsMainComponent } from './pages/infos/informations-main/informations-main.component';
import { AddStationComponent } from './pages/stations/add-station/add-station.component';
import { TrajectComponent } from './pages/traject/traject.component';

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
  }


  // Tabs

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
