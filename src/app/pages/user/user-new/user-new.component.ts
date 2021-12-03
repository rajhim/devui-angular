import {Component, OnInit, ViewChild} from '@angular/core';
import {FormLayout} from "ng-devui";
import {roleList, UserModel} from "../mock-data";
import {UserService} from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})
export class UserNewComponent implements OnInit {
  @ViewChild('f') validateForm!: NgForm;
  layoutDirection: FormLayout = FormLayout.Vertical;
  selectOptions = roleList;
  routeId?: any;
  userModel: UserModel = {
    id: 0,
    name: '',
    role: ''
  };
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.routeId = (params['id']);
    });

    if(this.routeId){
      this.userService.viewDetails(this.routeId);
      var details = this.userService.user.getValue();
      if(details){
        this.userModel = details;
      }
    }
  }

  ngOnInit() {

  }

  submitData(): any {
    if(this.validateForm.valid){
      if(!this.routeId){
        this.userService.users.subscribe(data => {
          this.userModel.id = data.length;
        })

        this.userService.addNewResult(this.userModel);
        this.router.navigate(['/users/list']);
      }else{
        this.userService.updateResult(this.userModel);
        this.router.navigate(['/users/list']);
      }
    }else{
      Object.keys(this.validateForm.controls).forEach(key=>{
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
        this.validateForm.controls[key].markAsUntouched();
      })
    }




  }
}
