import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './main-module.component';
import { AboutUsComponent } from './MainComponent/about-us/about-us.component';
import { ContactComponent } from './MainComponent/contact/contact.component';
import { HomeComponent } from './MainComponent/home/home.component';
import { ModernslaveryComponent } from './MainComponent/modernslavery/modernslavery.component';
import { PrivacyComponent } from './MainComponent/privacy/privacy.component';
import { ServicesComponent } from './MainComponent/services/services.component';
import { StartComponent } from './MainComponent/start/start.component';
import { TermsComponent } from './MainComponent/terms/terms.component';

const routes: Routes = [{ path: '', component: MainModuleComponent,children:[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"service",component:ServicesComponent},
  {path:"about",component:AboutUsComponent},
  {path:"contact",component:ContactComponent},
  {path:"start",component:StartComponent},
  {path:"privacy",component:PrivacyComponent},
  {path:"modern",component:ModernslaveryComponent},
  {path:"terms",component:TermsComponent}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
