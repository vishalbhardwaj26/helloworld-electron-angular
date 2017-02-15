import {bootstrap} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import {NgFor} from '@angular/common';



@Component({
  selector: 'app-angular',  
  template: `
    <h1>{{ title }}</h1>   
  `
})

export class App {

  title: string = "Hello World from Electron App + angular2"  

  constructor() {}

}

bootstrap(App);