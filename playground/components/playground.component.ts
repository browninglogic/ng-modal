import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ModalManagerModule }  from '../../dist';

@Component({
  selector: 'playground',
  templateUrl: 'components/playground.component.html'
})
export class PlaygroundComponent {}