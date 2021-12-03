import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormLayout, ToastService} from "ng-devui";
import {User} from "../models/login.models";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {Login, LoginSuccess} from "../store/action/login.actions";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  layoutDirection: FormLayout = FormLayout.Vertical;
  user: User = new User();
  getState!: Observable<any>;
  errorMessage: string = '';

  isSubmitted: boolean = false;
  logoSrc = 'https://res.hc-cdn.com/x-roma-components/1.0.10/assets/devui/logo.svg';
  constructor(private store:Store, private router: Router,private toastService: ToastService) { }

  ngOnInit(): void {
    // this.getState.subscribe((state) => {
    //   // console.log(state);
    //   if (state && state.errorMessage) {
    //     this.errorMessage = state.errorMessage;
    //   }
    // });
  }

  onLoginSubmit() {
     const actionPayload = {
        username: this.user.username,
        password: this.user.password
      };
      this.store.dispatch(new Login(actionPayload));

  }




}
