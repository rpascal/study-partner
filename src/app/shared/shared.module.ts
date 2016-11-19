import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FirebaseService} from '../services/firebase/firebase.service';
import {ClassService} from '../services/class/class.service';
import {ScheduleService} from '../services/schedule/schedule.service';
import {UserService} from '../services/user/user.service';
import {InstructorService} from '../services/instructor/instructor.service';
import {CourseService} from '../services/courses/course.service';

import {FilesService} from '../services/files/file.service';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [],
  providers: [FilesService,FirebaseService, ClassService, ScheduleService, UserService, InstructorService, CourseService],
  exports:      [ CommonModule, FormsModule,HttpModule,NgbModule]
})

export class SharedModule { }
