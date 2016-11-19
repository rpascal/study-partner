import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSchedulesComponent } from './user-schedules.component';
import {UserSchedulesRoutingModule} from './user-schedules-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {AddClassComponent} from '../add-class/add-class.component';
import {CourseIntrucSearchComponent} from '../courseIntructorSearch/courseIntrucSearch.component';
import {InstructorCourseSearchComponent} from '../instructorCourseSearch/InstructorCourseSearch.component';
import {InputDebounceComponent} from "../InputDebounce/InputDebounceComponent.component";


@NgModule({
  imports: [
    SharedModule,
    UserSchedulesRoutingModule,
  
  ],
  declarations: [UserSchedulesComponent, AddClassComponent, InputDebounceComponent, CourseIntrucSearchComponent, InstructorCourseSearchComponent]
})
export class UserSchedulesModule { }
