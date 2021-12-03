import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {roleList} from "../../pages/user/mock-data";


@Directive({
  selector: '[checkRole]'
})

export class CheckRoleDirective implements OnInit {
  roleList = roleList;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input() set checkRole(checkRole: any) {
    const role = (sessionStorage.getItem('role'));
    // let showBoolean = true;
    if (role) {
      let foundRole = this.roleList.find(fin => fin == role);
      // console.log(foundRole, checkRole);
      let showBoolean = checkRole.some((ev: any) => { console.log(ev)
        return ev == foundRole});
      // console.log(showBoolean);
      if (showBoolean) {
        // If condition is true add template to DOM
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        // Else remove template from DOM
        this.viewContainer.clear();
      }
    }

  }

  ngOnInit() {
  }

  ngOnChange() {
    // var auth = JSON.parse(sessionStorage.getItem("role"));
    // if (auth) {
    // console.log(auth, "---")
    // }
  }

}
