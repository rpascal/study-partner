import { NgModule } from '@angular/core';

import {RegisterRoutingModule} from './register-routing.module';
import {SharedModule} from '../../shared/shared.module';

import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    RegisterRoutingModule,
    SharedModule

  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
