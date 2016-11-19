import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyScheduleComponent } from './my-schedule.component';
import {MyScheduleRoutingModule} from './my-schedule-routing.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
   SharedModule,
   MyScheduleRoutingModule
  ],
  declarations: [MyScheduleComponent]
})
export class MyScheduleModule { }
