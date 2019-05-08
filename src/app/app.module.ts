import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChoicesComponent } from './choices/choices.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent, ChoicesComponent, PizzaComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSvgIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PizzaComponent]
})
export class AppModule {}
