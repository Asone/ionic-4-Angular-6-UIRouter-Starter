import { PagesModule } from './../pages/pages.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './routes';
import { IonicModule, IonicRouteStrategy, Tabs, Tab } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule, MAIN_STATES } from './app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TabsPage } from '../pages/Tabs/Tabs.page';
import { UIRouterModule, UIRouter, UIView } from '../../node_modules/@uirouter/angular';
import { routeurConfig } from './router';
// import * as UIouter from '@uirouter/angular';
import { NewsPage, InformationsPage, FeaturesPage } from '../pages/index';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [AppComponent,TabsPage,NewsPage, InformationsPage, FeaturesPage],
  entryComponents: [],
  imports: [
    BrowserModule,
    UIRouterModule.forRoot({
        states: MAIN_STATES,
        config: routeurConfig,
        otherwise: { state: 'app.tabs', params: {} },
        useHash: true,
    
    }),
    IonicModule.forRoot(), 
    //AppRoutingModule,
    HttpClientModule,
    SharedModule,
  //  PagesModule
  ],
  providers: [
    Tabs,
    StatusBar,
    SplashScreen,
 // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [UIView]
})
export class AppModule {
  constructor(uiRouter: UIRouter) {}
}
