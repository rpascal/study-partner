
import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf }       from '@angular/core';

import { CommonModule }      from '@angular/common';

import {HeaderComponent} from '../components/header/header.component';
import {firebaseConifg} from '../firebase-config';
import {AppRoutingModule} from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports:      [ NgbModule.forRoot(), CommonModule, firebaseConifg,AppRoutingModule ],
  declarations: [ HeaderComponent ],
  exports:      [ HeaderComponent, AppRoutingModule ],
  providers:    [  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      ]
    };
  }
}
