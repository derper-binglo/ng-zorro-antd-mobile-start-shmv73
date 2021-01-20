import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ElementRef } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile'

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgZorroAntdMobileModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }