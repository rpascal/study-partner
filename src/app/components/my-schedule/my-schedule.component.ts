import { Component, OnInit } from '@angular/core';

import { FilesService } from '../../services/files/file.service';
import { ClassModel, ClassService } from '../../services/class/class.service';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { UserService, UserModel } from '../../services/user/user.service';



@Component({
  selector: 'app-my-schedule',
  templateUrl: './my-schedule.component.html',
  styleUrls: ['./my-schedule.component.css']
})
export class MyScheduleComponent implements OnInit {

  public url : string = 'temp';
  public classes;
  constructor(public fs : FilesService, public cs : ClassService,
  public ss : ScheduleService, public us :UserService) {
    

    
    this.us.getUser().subscribe(user => {
      this.loadClasses(user.schedule);
    });

   }


   ngOnInit() {

  }

  loadImage() {
    
  }

  onSelectClass(object) {
    // console.log(object);
    // let key = this.fs.add(this.url);
    // let temp = {};// = [];
    // temp[key] = true;

    // this.cs.updateClasee(object.$key +'/Files', temp);

   console.log(object.Files);

  }

  loadClasses(scheduleKey) {

    let temp = this.ss.getEntities().find(data => {
      if (data.$key == scheduleKey)
        return true;
      return false;
    })
    this.classes = this.cs.getClasses().filter(classes => {
      if (temp.hasOwnProperty(classes.$key)) {
          return true;
        }
        return false;
    });

  }


}
