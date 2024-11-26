import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './comps/header/header.component';
import { HomeComponent } from './entrypages/home/home.component';
import { DashboardComponent } from './entrypages/dashboard/dashboard.component';
import { LoginpageComponent } from './entrypages/home/loginpage/loginpage.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './comps/header/about/about.component';
import { AboutmeComponent } from './comps/header/about/aboutme/aboutme.component';
import { ExperienceComponent } from './comps/header/about/experience/experience.component';
import { SkillsComponent } from './comps/header/about/skills/skills.component';
import { EducationComponent } from './comps/header/about/education/education.component';
import { ContactComponent } from './entrypages/dashboard/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    LoginpageComponent,
    AboutComponent,
    AboutmeComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
