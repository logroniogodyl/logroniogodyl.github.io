import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ChisiamoComponent } from './components/chisiamo/chisiamo.component';
import { MenuComponent } from './components/menu/menu.component';
import { DoveComponent } from './components/dove/dove.component';
import { ContattiComponent } from './components/contatti/contatti.component';

@NgModule({
  declarations: [
    AppComponent,
    ChisiamoComponent,
    MenuComponent,
    DoveComponent,
    ContattiComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
