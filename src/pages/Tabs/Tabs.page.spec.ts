import { async, TestBed } from '@angular/core/testing';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from './Tabs.page';
import {
  PlatformMock,
} from '../../../test-config/mocks-ionic';
describe('[Pages:Tabs] Performs tests on Tabs Page', () => {
    let fixture;
    let component;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TabsPage],
        imports: [
  
        ],
        providers: []
      })
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(TabsPage);
      component = fixture.componentInstance;
    });
  
    it('Component should exist', () => {
      expect(component instanceof TabsPage).toBe(true);
    });
  

  });