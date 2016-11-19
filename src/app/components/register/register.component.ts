import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase/firebase.service'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

    username: string;
  password: string;

  constructor(public fb: FirebaseService) { }

  ngOnInit() {
      console.log('Registered');
  }

  register(): void {
    this.fb.register(this.username, this.password);
  }


}
