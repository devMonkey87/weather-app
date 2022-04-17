import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './core/main-dashboard/card/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImcComponent } from './core/imc/imc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImcModalComponent } from './core/imc/imc-modal/imc-modal/imc-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    CardComponent,
    ImcComponent,
    ImcModalComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
