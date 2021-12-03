import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import { CardModule } from 'ng-devui/card';
import { FormModule } from 'ng-devui/form';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "ng-devui";
import { ToastModule } from 'ng-devui/toast';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {AuthenticationEffects} from "./store/effects/login.effects";
import {reducers} from "./store/app.states";
import {environment} from "../../environments/environment";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ButtonModule,
    ToastModule,
    FormModule,
    AuthRoutingModule,


  ]
})
export class AuthModule { }
