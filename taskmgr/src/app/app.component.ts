import { Component, Inject } from '@angular/core';
import { OverlayContainer } from "@angular/material";
import { trigger, state, transition, style, animate, keyframes } from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  darkTheme = false;
  squareState:string; 

  constructor(private oc:OverlayContainer, @Inject('BASE_CONFIG') config){
    console.log(config);
    
  }

  switchTheme(pink) {
    this.darkTheme = pink;
    this.oc.themeClass = pink ? 'myapp-dark-theme' :null;
  }
  onClick() {
    this.squareState = this.squareState === 'red'? 'green' : 'red';
  }
}
