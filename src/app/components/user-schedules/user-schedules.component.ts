import { Component, OnInit, OnDestroy } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { ScheduleService } from '../../services/schedule/schedule.service';
import { UserService, UserModel } from '../../services/user/user.service';
import { ClassModel, ClassService } from '../../services/class/class.service';

@Component({
  selector: 'app-user-schedules',
  templateUrl: './user-schedules.component.html',
  styleUrls: ['./user-schedules.component.css']
})
export class UserSchedulesComponent {

  private classes: Array<any>;//: FirebaseListObservable<any[]>;

  constructor(public fb: FirebaseService,
    public scheduleService: ScheduleService,
    public UserService: UserService,
    public classService: ClassService) { }

  emit(value) {
    this.classes = value;
  }
  onSelectClass(value) {
    let endHour = 17;
    let endMin = 0;
    let startMin = 0;
    let startHour = 9;
    let tempEarliestTime: Date = new Date(2000, 1, 1, startHour, startMin, 0, 0);

    let tempLatestTime: Date = new Date(2000, 1, 1, endHour, endMin, 0, 0);


    this.UserService.getUser().subscribe(currentUser => {
      let temp: Array<any> = [];
      let users = this.UserService.getListOfUsers(value.Users);
      users.forEach(user => {

        let schedule = this.scheduleService.getSchdule(user.schedule);

        let classes = this.classService.getCertainClasses(schedule);
        // console.log(classes);
        let temp2: Array<any> = [];
        classes.forEach(cla => {
          let start: Date = new Date(cla.startDate);
          let end: Date = new Date(cla.endDate);
          // console.log(start, tempLatestTime, ' blah');
          if (end > tempEarliestTime && start < tempLatestTime) {
            temp2.push({
              startDate: start,
              endDate: end,
              days: cla.Days
            });
          }
        });
        temp.push({
          user: user.$key,
          times: temp2
        });

      });

      temp.forEach(user => {

        user.times.sort((a, b) => {
          let aStart: Date = new Date(a.startDate);
          let aEnd: Date = new Date(a.endDate);
          let bStart: Date = new Date(b.startDate);
          let bEnd: Date = new Date(b.endDate);

          if (aStart < bStart)
            return -1;
          else if (aStart > bStart)
            return 1;
          return 0;
        });

        let i = 0;
        // let gaps : Array<any> = [];
        let Mgaps: Array<any> = [];
        let Tgaps: Array<any> = [];
        let Wgaps: Array<any> = [];
        let Thgaps: Array<any> = [];
        let Fgaps: Array<any> = [];
        let Sagaps: Array<any> = [];
        let Sugaps: Array<any> = [];
        console.log(user.times[i].days);
        for (i; i < user.times.length; i++) {

          if (user.times[i].days['Monday']) {
            Mgaps.push(user.times[i]);
            // console.log('M');
            // this.gapsPush(Mgaps, i, tempEarliestTime, tempLatestTime, user);
          } 
          if (user.times[i].days['Tuesday']) {
            Tgaps.push(user.times[i]);
            // console.log('t');
            // this.gapsPush(Tgaps, i, tempEarliestTime, tempLatestTime, user);

          }
           if (user.times[i].days['Wednesday']) {
             Wgaps.push(user.times[i]);
            // console.log('w');
            // this.gapsPush(Wgaps, i, tempEarliestTime, tempLatestTime, user);
          } 
          
           if (user.times[i].days['Thursday']) {
             Thgaps.push(user.times[i]);
            // this.gapsPush(Thgaps, i, tempEarliestTime, tempLatestTime, user);
          } 
         if (user.times[i].days['Friday']) {
           Fgaps.push(user.times[i]);
            // this.gapsPush(Sagaps, i, tempEarliestTime, tempLatestTime, user);
          } 
           if (user.times[i].days['Saturday']) {
             Sagaps.push(user.times[i]);
            // this.gapsPush(Sugaps, i, tempEarliestTime, tempLatestTime, user);
          } 
           if (user.times[i].days['Sunday']) {
             Sugaps.push(user.times[i]);
           // this.gapsPush(Sugaps, i, tempEarliestTime, tempLatestTime, user);
          }
        }

        



        user['perDay'] = {
          Monday: Mgaps,
          Tuesday: Tgaps,
          Wednesday: Wgaps,
          Thursday: Thgaps,
          Friday: Fgaps,
          Saturday: Sagaps,
          Sunday: Sugaps
        };






      });




      let userTimes = temp.filter(item => {
        // console.log(item.user === currentUser.$key);
        if (item.user === currentUser.$key)
          return true;
        return false;
      });
      temp = temp.filter(item => {
        // console.log(item.user === currentUser.$key);
        if (item.user === currentUser.$key)
          return false;
        return true;
      });


      //   temp.sort((a,b) =>{
      //   let aStart : Date = new Date(a.startDate);
      //   let aEnd : Date = new Date(a.endDate);
      //   let bStart : Date = new Date(b.startDate);
      //   let bEnd : Date = new Date(b.endDate);



      //   if(aStart < bStart)
      //   return -1;
      //   else if(aStart > bStart)
      //   return 1;
      //   return 0;

      // });

      // var timeStart = new Date("Mon Jan 01 2007 11:00:00 GMT+0530").getTime();
      // var timeEnd = new Date("Mon Jan 01 2007 12:45:00 GMT+0530").getTime();
      // var hourDiff = timeEnd - timeStart; //in ms
      // var secDiff = hourDiff / 1000; //in s
      // var minDiff = hourDiff / 60 / 1000; //in minutes
      // var hDiff = hourDiff / 3600 / 1000; //in hours
      // var humanReadable = {};
      // humanReadable['hours'] = Math.floor(hDiff);
      // humanReadable['minutes'] = minDiff;
      // console.log(humanReadable);

      //       userTimes.forEach((user,i) => {
      //         let aS : Date = new Date(user.startDate);
      //         let aE : Date = new Date(user.endDate);
      //         temp.forEach((other,j) => {
      //             let bS : Date = new Date(other.startDate);
      //             let bE : Date = new Date(other.endDate);

      //            // console.log(tempEarliestTime - bE);
      //         });

      //       });



      console.log(userTimes, 'User');
      console.log(temp, 'Temp');

    });
  }


  gapsPush(gaps: Array<any>, i: number, tempEarliestTime, tempLatestTime, user) {
    if (i === 0) {
      gaps.push({
        start: tempEarliestTime,
        end: user.times[i].startDate
      });
    }
    // console.log(i === (user.times.length-1),i,user.times.length);
    if (i === (user.times.length - 1)) {
      gaps.push({
        start: user.times[i].endDate,
        end: tempLatestTime
      });
    } else {
      gaps.push({
        start: user.times[i].endDate,
        end: user.times[i + 1].startDate
      });
    }
  }



  onDeleteClass(value) {
    // console.log(value);
    let i = this.classes.indexOf(value);
    console.log(i, this.classes);
    this.classes.splice(i, 1);
    console.log(i, this.classes);
    this.UserService.getUser().subscribe(user => {
      let schedule = user.schedule;
      this.fb.deleteValue('Schedule/' + schedule + '/' + value.$key);
      const t = this.scheduleService.checkExists(value.$key, schedule);
      if (!t) {
        this.fb.deleteValue('Class/' + value.$key);
      }
    });
  }


}
