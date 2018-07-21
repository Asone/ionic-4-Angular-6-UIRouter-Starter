/**
 * 
 * This file provide some mocks angular modules from Ionic. It is useful for unit tests. 
 * 
 * @todo : Remove mocks for outdated or deprecated ionic classes.
 * 
 */

// import { StatusBarOriginal } from '@ionic-native/status-bar';
// import {  SplashScreenOriginal } from '@ionic-native/splash-screen';

/**
 * Mocks the platform module.  
 */
export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

/**
 * Mocks the Status bar module.  
 */
/*
export class StatusBarMock extends StatusBarOriginal {
  styleDefault() {
    return;
  }
}
*/

/**
 * Mocks the splash screen module.  
 */
/*
export class SplashScreenMock extends SplashScreenOriginal {
  hide() {
    return;
  }
}
*/
/**
 * Mocks the navigation module.  
 */
export class NavMock {
 
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
 
  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }
 
  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return ;
  }

}
