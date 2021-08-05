import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { PropertyComponent } from './compnents/property/property.component';
import { LoaderComponent } from './compnents/loader/loader.component';
import { PropertiesComponent } from './compnents/properties/properties.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './compnents/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PropertyComponent,
    LoaderComponent,
    PropertiesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
