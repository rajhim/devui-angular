import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonLayout_ROUTES} from "./shared/routes/common-layout.routes";
import {LayoutComponent} from "./shared/layout/layout.component";
import {AuthLayoutComponent} from "./shared/layout/auth-layout/auth-layout.component";
import {AuthLayout_ROUTES} from "./shared/routes/auth-layout.routes";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },


  {
    path: '',
    component: LayoutComponent,
    children: CommonLayout_ROUTES
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: AuthLayout_ROUTES
  },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    useHash: true
  })],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
