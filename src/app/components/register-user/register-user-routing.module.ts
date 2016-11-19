import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { RegisterUserComponent }    from './register-user.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RegisterUserComponent }
  ])],
  exports: [RouterModule]
})
export class RegisterUserRoutingModule {}
