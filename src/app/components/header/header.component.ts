import { Component, OnInit } from '@angular/core';
// import {FirebaseService} from '../../services/firebase/firebase.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //  providers : [FirebaseService]
})
export class HeaderComponent {//implements OnInit {

  constructor() { }
//public fb : FirebaseService
  public loggedIn : boolean = false;
  // ngOnInit() {
  //   this.fb.checkLoggedIn().subscribe(value => this.loggedIn = value);
  // }


  logout() : void {
    //this.fb.logOut();
  }

}
