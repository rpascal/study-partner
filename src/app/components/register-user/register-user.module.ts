import { NgModule } from '@angular/core';

import {RegisterUserRoutingModule} from './register-user-routing.module';
import {SharedModule} from '../../shared/shared.module';

import { RegisterUserComponent } from './register-user.component';

@NgModule({
  imports: [
  
    SharedModule,
  RegisterUserRoutingModule
  ],
  declarations: [RegisterUserComponent]
})
export class RegisterUserModule { }
