import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AlarmComponent } from './components/alarm/alarm.component';
import { ActionComponent } from './components/action/action.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MachineComponent } from './components/machine/machine.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {AuthGuardService} from './services/auth-guard.service';
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'alarms', component: AlarmComponent, canActivate: [AuthGuardService] },
  { path: 'machines/:id', component: MachineComponent, canActivate: [AuthGuardService] },
  { path: 'actions', component: ActionComponent, canActivate: [AuthGuardService] },
  { path: 'master-data', component: SettingsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
