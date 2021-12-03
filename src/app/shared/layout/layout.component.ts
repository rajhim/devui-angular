import { Component, OnInit } from '@angular/core';
import {User} from "../../auth/models/login.models";
import {Observable} from "rxjs";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState, selectAuthenticationState} from "../../auth/store/app.states";
import {Logout} from "../../auth/store/action/login.actions";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  getState!: Observable<any>;
  isAuthenticated: boolean = false;
  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  showSlideMenu = true;
  userValue = 'Admin';
  routerData?: any;
  menu = [
    {
      title: 'Dashboard', link:'home'

    },
    {
      title: 'User',
      children: [{ title: 'New', link: 'users/new' }, { title: 'List', link: 'users/list'}],
    },
    {
      title: 'Parent',
      children: [{ title: 'Child 1' }, { title: 'Child 2' }],
    },

  ];
  constructor(  private  router: Router,
                private route: ActivatedRoute,
                private store: Store<AppState>) {
    console.log("check--> layout")
    this.getState = this.store.select(selectAuthenticationState);
  }

  ngOnInit(): void {
    this.getState.subscribe((state) => {
      if (state) {
        this.userValue =  state.user.username.slice(0, state.user.username.indexOf('@'))
      }
    });
  }
  onToggle(event: any) {
    console.log(event);
  }

  clickSlideMenu(){
    this.showSlideMenu =! this.showSlideMenu;
    this.setSlideBarStyle();
  }
  setSlideBarStyle(): void {
    const ele = document.querySelector('.sidebar-wrapper');
    if (ele) {
      ele.setAttribute('style', `max-width: ${ this.showSlideMenu ? '260px' : '0'}`);
    }
  }
  navigateUrl(val: any){
    // console.log(val.item.link);
    this.router.navigate([val.item.link]);
  }

  logout(): void {
    this.store.dispatch(new Logout(""));
    this.router.navigate(['auth/login']);
  }

  onActivate(outlet: RouterOutlet) {
    outlet.activatedRoute.data.pipe(map(data =>this.routerData = data)).toPromise().then();
  }
}
