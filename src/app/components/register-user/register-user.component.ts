import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

     username: string;
  password: string;

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
      console.log('Registered');
  }

  register(): void {
    //this.fb.register(this.username, this.password);
  }


}
