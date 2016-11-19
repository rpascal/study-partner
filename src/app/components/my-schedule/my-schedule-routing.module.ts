import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';


import { MyScheduleComponent }    from './my-schedule.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: MyScheduleComponent }
  ])],
  exports: [RouterModule]
})
export class MyScheduleRoutingModule {}
