import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { StationMainComponent } from './pages/stations/station-main/station-main.component';
import { TitresMainComponent } from './pages/titres/titres-main/titres-main.component';
import { InformationsMainComponent } from './pages/infos/informations-main/informations-main.component';

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
    path: 'titres',
    component: TitresMainComponent
  },
  {
    path: 'informations',
    component: InformationsMainComponent
  },


  // Tabs

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
