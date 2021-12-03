import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule, AvatarModule, BreadcrumbModule, ButtonModule, DropDownModule, LayoutModule} from 'ng-devui';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {AuthLayoutComponent} from "./layout/auth-layout/auth-layout.component";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {reducers} from "../auth/store/app.states";
import {EffectsModule} from "@ngrx/effects";
import {AuthenticationEffects} from "../auth/store/effects/login.effects";
import {RouterState, StoreRouterConnectingModule} from "@ngrx/router-store";
import {CheckRoleDirective} from "./directive/check-role.directive";


@NgModule({
  declarations: [
    LayoutComponent,
    AuthLayoutComponent,
    CheckRoleDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AccordionModule,
    BreadcrumbModule,
    DropDownModule,
    ButtonModule,
    AvatarModule,
    LayoutModule,


  ],
  exports: [
    RouterModule,
    HttpClientModule,
    LayoutModule,
    AccordionModule,
    BreadcrumbModule,
    DropDownModule,
    ButtonModule,
    AvatarModule,
    LayoutComponent,
    AuthLayoutComponent,
    CheckRoleDirective
  ]
})
export class SharedModule { }
