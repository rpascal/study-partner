import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGaurdService} from './services/AuthGuard/auth-guard.service'
export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  { 
    path: 'login', 
    loadChildren: 'app/components/login/login.module#LoginModule'
  },
    { 
    path: 'my-schedule', 
    loadChildren: 'app/components/my-schedule/my-schedule.module#MyScheduleModule'
  },
  
  { 
    path: 'register', 
    loadChildren: 'app/components/register-user/register-user.module#RegisterUserModule'
  },
  { 
    path: 'user-schedules', 
    loadChildren: 'app/components/user-schedules/user-schedules.module#UserSchedulesModule',
    canActivate: [AuthGaurdService] 
  },
  { 
    path: 'updateProfile', 
    loadChildren: 'app/components/update-profile/update-profile.module#UpdateProfileModule',
    canActivate: [AuthGaurdService] 
  },
  { 
    path: 'createClass', 
    loadChildren: 'app/components/create-class/create-class.module#CreateClassModule',
    canActivate: [AuthGaurdService] 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGaurdService],
  exports: [RouterModule]
})
export class AppRoutingModule {}