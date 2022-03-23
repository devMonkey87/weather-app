import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './core/main-dashboard/card/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImcComponent } from './core/imc/imc.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    CardComponent,
    ImcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
