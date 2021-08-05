import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertiesGuard } from './compnents/guards/properties.guard';
import { LoginComponent } from './compnents/login/login.component';
import { PropertiesComponent } from './compnents/properties/properties.component';
import { PropertyComponent } from './compnents/property/property.component';


const routes: Routes = [
  {path: 'list', component : PropertiesComponent, canActivate:[PropertiesGuard]},
  {path: 'property/:id', component : PropertyComponent},
  {path: 'login', component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
