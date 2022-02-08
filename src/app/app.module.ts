import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import localePL from '@angular/common/locales/pl';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePL)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
