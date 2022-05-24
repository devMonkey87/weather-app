import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImcModalComponent } from './core/imc/imc-modal/imc-modal/imc-modal.component';
import { ImcComponent } from './core/imc/imc.component';
import { MainDashboardComponent } from './core/main-dashboard/main-dashboard.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
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
