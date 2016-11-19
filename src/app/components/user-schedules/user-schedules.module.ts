import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSchedulesComponent } from './user-schedules.component';
import {UserSchedulesRoutingModule} from './user-schedules-routing.module';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    UserSchedulesRoutingModule
  ],
  declarations: [UserSchedulesComponent]
})
export class UserSchedulesModule { }
