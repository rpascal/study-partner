import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';


import { UserSchedulesComponent }    from './user-schedules.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: UserSchedulesComponent }
  ])],
  exports: [RouterModule]
})
export class UserSchedulesRoutingModule {}
