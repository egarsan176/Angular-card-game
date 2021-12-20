import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { CardsModule } from './cards/cards.module';
import { AppRoutingModule } from './app.routing';
import { RestartModule } from './restart/restart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    CardsModule,
    RestartModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
