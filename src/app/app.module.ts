import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Component Native
import { Geolocation } from '@ionic-native/geolocation/ngx';

// Services
import { AddressService } from './shared/address.service';

// Components
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HoverSearchComponent } from './hover-search/hover-search.component';
import { SearchComponent } from './pages/search/search.component';
import { PopoverComponent } from './popover/popover.component';

// Favoris
import { FavorisMainComponent } from './pages/favoris/favoris-main/favoris-main.component';

// Titres
import { TitresMainComponent } from './pages/titres/titres-main/titres-main.component';
import { TitreInformationComponent } from './pages/titres/titre-information/titre-information.component';
import { TitreNavigoComponent } from './pages/titres/titre-navigo/titre-navigo.component';
import { TitrePerduComponent } from './pages/titres/titre-navigo/titre-perdu/titre-perdu.component';
import { TitreRenouvelerComponent } from './pages/titres/titre-navigo/titre-renouveler/titre-renouveler.component';

// Stations
import { StationMainComponent } from './pages/stations/station-main/station-main.component';
import { AddStationComponent } from './pages/stations/add-station/add-station.component';

// Infos
import { InformationsMainComponent } from './pages/infos/informations-main/informations-main.component';
import { MetroComponent } from './pages/infos/metro-component/metro-component.component';
import { RERComponent } from './pages/infos/rer/rer.component';
import { TramComponent } from './pages/infos/tram/tram.component';

import { TrajectComponent } from './pages/traject/traject.component';


// Réglages
import {ReglagesComponent} from './pages/reglages/reglages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent,
    SideMenuComponent,
    PopoverComponent,

    HoverSearchComponent,
    SearchComponent,
    TrajectComponent,
    // Favoris
    FavorisMainComponent,

    // Titres
    TitresMainComponent,
    TitreInformationComponent,
    TitreNavigoComponent,
    TitrePerduComponent,
    TitreRenouvelerComponent,

    // Stations
    StationMainComponent,
    AddStationComponent,

    // Informations
    InformationsMainComponent,
    MetroComponent,
    RERComponent,
    TramComponent,

    // Reglage
    ReglagesComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    Geolocation,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
