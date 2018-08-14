import { InformationsPage } from './../pages/Informations/Informations.page';
import { NewsPage } from './../pages/News/News.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../pages/Tabs/Tabs.page';
import * as UIouter from '@uirouter/angular';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { FeaturesPage } from '../pages/Features/Features.page';
import { AppComponent } from './app.component';


/**
 * 
 * Use this structure of routes if you want to use the default angular routing system
 * 
 */
const routes: Routes = [
  { path: '', component: TabsPage },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export let MAIN_STATES: Ng2StateDeclaration[] = [
  {
    name: 'app',
    url: '/',
    views: { 
      $default: { component: AppComponent },
      'footer@app': { component : TabsPage },
      'informations@app': { component: InformationsPage },
      'news@app': { component: NewsPage }
    } // this state should not be accessed directly and should be just an interface to sub-states
  },
  {
    name: 'app.tabs',
    url: 'tabs',
    views: {
      $default: { component : TabsPage },
      'news@app.tabs': { component: NewsPage },
      'informations@app.tabs' : { component: InformationsPage },
      'features@app.tabs' : { component: FeaturesPage }
    }
  },
  {
    name: 'app.features',
    url: 'features',
    views: {
      $default: { component: FeaturesPage }
    }
  },
  {
    name: 'app.news',
    url: 'news',
    views: {
      $default: { component: NewsPage }
    }
  }
];
