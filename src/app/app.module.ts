import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarComponent } from './car/car.component';

import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ClienteComponent } from './cliente/cliente.component';
import { CarService } from './car/car.service';
import { AutocompleteComponent } from './util/autocomplete/autocomplete.component';
import { SelectComponent } from './util/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarComponent,
    ClienteComponent,
    AutocompleteComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
