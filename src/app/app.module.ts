import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component Native
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Components
import { HomeComponent } from './home/home.component';
import { TabsComponent } from './pages/tabs/tabs.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HoverSearchComponent } from './hover-search/hover-search.component';

// Favoris
import { FavorisMainComponent } from './pages/favoris/favoris-main/favoris-main.component';

// Titres
import { TitresMainComponent } from './pages/titres/titres-main/titres-main.component';

// Stations
import { StationMainComponent } from './pages/stations/station-main/station-main.component';
import { AddStationComponent } from './pages/stations/add-station/add-station.component';

// Infos
import { InformationsMainComponent } from './pages/infos/informations-main/informations-main.component';
import { MetroComponent } from './pages/infos/metro-component/metro-component.component';
import { RERComponent } from './pages/infos/rer/rer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    TabsComponent,
    SideMenuComponent,

    HoverSearchComponent,
    // Favoris
    FavorisMainComponent,

    // Titres
    TitresMainComponent,

    // Stations
    StationMainComponent,
    AddStationComponent,

    // Informations
    InformationsMainComponent,
    MetroComponent,
    RERComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
