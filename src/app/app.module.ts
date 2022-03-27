import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './core/main-dashboard/card/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImcComponent } from './core/imc/imc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImcModalComponent } from './core/imc/imc-modal/imc-modal/imc-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    CardComponent,
    ImcComponent,
    ImcModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
