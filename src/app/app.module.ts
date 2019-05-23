import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// to delete
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
// to delete

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AlarmComponent } from './components/alarm/alarm.component';
import { ActionComponent } from './components/action/action.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlarmDetailComponent } from './components/alarm/alarm-detail/alarm-detail.component';
import { ActionDetailComponent } from './components/action/action-detail/action-detail.component';
import { MachineComponent } from './components/machine/machine.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import { MessagesComponent } from './components/messages/messages.component';
import {AuthGuardService} from './services/auth-guard.service';
import { AdminComponent } from './components/admin/admin.component';
import { SettingsComponent } from './components/settings/settings.component';


//table
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';



@NgModule({
  declarations: [
    AppComponent,
    AlarmComponent,
    ActionComponent,
    DashboardComponent,
    NavbarComponent,
    AlarmDetailComponent,
    ActionDetailComponent,
    MachineComponent,
    SignupComponent,
    SigninComponent,
    MessagesComponent,
    AdminComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TableModule,
    SliderModule
  ],
  providers: [DataService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
