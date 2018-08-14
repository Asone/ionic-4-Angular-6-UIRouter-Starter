import { Component } from '@angular/core';

@Component({
    selector: 'tabs-page',
    templateUrl: 'tabs.page.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    public tab1Root: string = 'homepage';
    public tab2Root: string = 'dashboard';
    public tab3Root: string = 'formscategories';
    public tab4Root: string = 'projects';

    constructor () {
    }
}
