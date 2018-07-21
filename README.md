
# Ionic 4 & Angular 6 Boilerplate

[![Build Status](https://travis-ci.org/Asone/ionic-3_Angular-5-Boilerplate.svg?branch=master)](https://travis-ci.org/Asone/ionic-3_Angular-5-Boilerplate) [![](https://circleci.com/gh/Asone/ionic-3_Angular-5-Boilerplate.png?circle-token=:circle-toke)](https://circleci.com/gh/Asone/ionic-3_Angular-5-Boilerplate)

The following repo provides a boilerplate for projects intended to be written with Ionic 4 & Angular 6. 

Please, note that this repo is based on active development releases of the following dependencies :

- `Ionic` as an alpha version
- `Capacitor` as a release candidate




# Install

## Install without Docker : 

You need to install `node` first in order to be able to download the following dependencies : 

#### Install Ionic : `npm i -g ionic` 
#### Install Karma : `npm i karma --save-dev`
#### Install Angular-cli : `npm -g angular-cli`
#### Install dependencies : `npm install`

## Install with Docker : 

Make sure you've installed docker first

`docker-compose build . && docker-compose up front -d`

It will run a `ionic serve` instruction on port 8100.


# Run and buid

- Serve application as web application : `ionic serve`
- Serve application in browser as electron PWA : `npm cap serve`
- Build angular app : `ionic build` 
- Build android app : `ionic cordova build android`
- Build iOS app : `ionic cordova build ios`
- Emulate on android : `ionic cordova emulate android`
- Emulate on iOS : `ionic cordova emulate ios`

- Perform unit tests : `npm test`
- Perform end-to-end tests :`npm e2e`

- Generate documentation : `npm run doc`


# Structure

The repo brings the described structures and coding conventions, trying to stick as much as possible to the official recommendations.

## Root structure

Root level is described as following : 

```
- src/				=> Sources of the application
- test-config/        		=> Config files for environments handling
-  package.json			=> Configure dependencies and npm run scripts
- tsconfig.json			=> TypeScript configuration
- ionic.config.json		=> Ionic configuration
- config.xml			=> Application configuration
- environments/			=> Environment configuration
- config/ 			=> Config folder containing main webpack configuration
- Test/ 			=> Config for environments handling
```

## Src structure

```
- shared/		=> Shared elements folder
	|
    + modules/	=> global's scoped modules
	+ services/ 	=> global's scoped services
	+ components/ 	=> global's scoped components
	+ directives/ 	=> global's scoped directives
- modules/
	|
	+ MyModule/
		+ Components/ => module scoped submodules
		+ Services/ => module scoped services
		+ Components/ => module scoped components
		+ Directives/ => module scoped directive
````

## Application Structure 

### Global Structure

Global structure is the following : 

```
- _Components				=> Components for Angular
- _Models				=> Custom types and interfaces 
- _TestData				=> Mocked data for tests & development
- _Services				=> Injectable classes for services like API requests
- _Pages				=> Pages containers for Ionic

```

### Angular Classes & Components

Following good practices, the structure of an Angular component should be as follows : 

```
- MyComponent
	- MyComponent.component.ts			=> Component Class
	- MyComponent.component.spec.ts			=> Unit tests
	- MyComponent.component.e2e.ts			=> end-to-end tests
	- MyComponent.component.scss			=> SASS/CSS styles
	- MyComponent.component.html			=> HTML Template
```

### Ionic pages Classes

Ionic pages classes should follow the same convention, however we will put here an additional file declaring an [`ngModule`](https://angular.io/api/core/NgModule)  for page which will provide Ionic Modules & scoped Angular components.

```
- MyPage
	- MyPage.page.ts				=> Component Class
	- MyComponent.page.spec.ts			=> Unit tests
	- MyComponent.page.e2e.ts			=> end-to-end tests
	- MyComponent.page.scss				=> SASS/CSS styles
	- MyComponent.page.html				=> HTML Template
	- MyComponent.page.module.ts	        	=> Page Module
```

## Capacitor

This boilerplate comes with the new `capacitor` package provided by Ionic Team. `Capacitor` brings the device-related components for your application and is backward compatible with `cordova` plugins. 

Note that if you want to rely on `cordova` only you'll still be able to do it. However you'll have to remove capacitor plugins references in the code. 

## Electron 

`Electron` allows you to build your app as a native mac OS application.  



# Dependencies

## Frameworks

### Core :

| Dependency | Description | Version | Documentation |
|----------------|-------------------------------|-----------------------------|------|
|Ionic| Javascript Hybrid Application development framework |v.4.0.0-alpha.10 | [Documentation](https://ionicframework.com/docs/) |
|Angular| SPA Framework for webapp development | @angular/core : v.6.0.9 <br /> angular-cli : v.6.0.8 | [Documentation](https://angular.io/docs) |
Cordova |mobile application development framework | v8.0.0 | [Documentation](https://cordova.apache.org/docs/) |
| Typescript |  JavaScript super-set for strong-typing code | v2.7.2 | [Documentation](http://www.typescriptlang.org/docs/) |
|Karma |Unit testing| Karma : v.2.0.0 <br /> karma-webpack : v.^3.0.0 | [Documentation](https://karma-runner.github.io/) |
| Jasmine | Behavior-driven development framework | v.^2.8.6 | [Documentation](https://jasmine.github.io/pages/docs_home.html) |
| Istanbul | test coverage reporting. Compatible reports for Jenkins. Package name : istanbul-instrumenter-loader | v.^3.0.1 | [Documentation](https://github.com/gotwarlost/istanbul) |
| Webpack | Bundle handler | v.3.8.1 | [Documentation](https://webpack.js.org/guides/) |

### Cordova plugins :

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  Deeplinks | URI navigation & Universal links | v.^1.0.15  
|  Network   | Device network access | 

### Ionic dependencies : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  IonicStorageModule  | Device storage | v.3.20.0  |
| Network | Network access module |


### Angular Dependencies : 

|         Dependency package    	 |   Description         			         | Version                       |
|----------------|-------------------------------|-----------------------------| 
|  @angular/animations <br />@angular/common <br /> @angular/compiler  <br />@angular/compiler-cli: ^5.2.9 <br />@angular/core  <br /> @angular/forms  <br /> @angular/http <br /> @angular/platform-browser <br /> @angular/platform-browser-dynamic  | Core modules| v.6.0.9
| @angular/animations| animations for components | v.6.0.9


### Karma plugins 

| Dependency package |  Description| Version |
|-|-|-|
|karma-chrome-launcher| loads karma in chrome | |
|karma-firefox-launcher| loads karma in firefox | |
|karma-jasmine | behavior driven framework | |
|karma-jasmine-html-reporter|  pretty ui for jasmine

## Angular Modules

TODO

## Ionic Modules

TODO


# Included features

## Environment handling

**Environment variables for build configuration.** 
Useful for handling different environment dependencies likes IPs or network URIs.   

## Travis Continuous integration ready

This repo comes with a functionnal travis configuration. When committing your work travis will try the following build :
- Cordova configuration
- Build creation for the ionic app
- Running unit tests

## Circle CI integration ready

Like Travis CI use, this repo provides also a **Circle CI configuration**. It will run a similar build as the one you can find for Travis.

## Storage service

**Angular service for accessing application storage.** 
Useful for data caching, user auto-authentication and user parameters settings.

## Network heart & pulse

**Angular service for network state.** 
This service can be used to dispatch connectivity behaviors. Some other applications for service are request buffering and cache management.

Note that connectivity state is boolean.

## Auto resume auth 

Main App module has a built-in method to **load a session**.  If a `session` key is found in storage, App module will check for connectivity and execute a  `resume` from access authentication API class if `connected`.

useful for authentication based behaviours developments.

## Good practices & conventions 

- [Angular good practices](https://angular.io/guide/styleguide)
- [TypeScript good practices](https://definitelytyped.org/guides/best-practices.html)


# Licence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.