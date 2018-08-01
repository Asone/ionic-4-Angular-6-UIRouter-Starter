
# Ionic 4 & Angular 6 Boilerplate

[![Build Status](https://travis-ci.org/Asone/ionic-4-Angular-6-UIRouter-Starter.svg?branch=master)](https://travis-ci.org/Asone/ionic-4-Angular-6-UIRouter-Starter) [![](https://circleci.com/gh/Asone/ionic-4-Angular-6-UIRouter-Starter.png?circle-token=:circle-toke)](https://circleci.com/gh/Asone/ionic-4-Angular-6-UIRouter-Starter)


The following repo provides a boilerplate for projects intended to be written with Ionic 4 & Angular 6. 

Please, note that this repo is based on active development releases of the following dependencies :

- [`Ionic`]() as a beta version
- [`Capacitor`]() as a release candidate

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

This repo follows the structures described [here](https://github.com/Asone/ionic-3_Angular-5-Boilerplate)

## [Capacitor]()

This boilerplate comes with the new `capacitor` package provided by Ionic Team. `Capacitor` brings the device-related components for your application and is backward compatible with `cordova` plugins. 

Note that if you want to rely on `cordova` only you'll still be able to do it. However you'll have to remove capacitor plugins references in the code. 

## [Electron]() 

`Electron` allows you to build your app as a native mac OS application.  


## Good practices & conventions 

- [Angular good practices](https://angular.io/guide/styleguide)
- [TypeScript good practices](https://definitelytyped.org/guides/best-practices.html)


# Licence

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.