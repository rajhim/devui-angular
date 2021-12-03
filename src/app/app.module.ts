import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./auth/store/app.states";
import {EffectsModule} from "@ngrx/effects";
import {AuthenticationEffects} from "./auth/store/effects/login.effects";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    DevUIModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthenticationEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
