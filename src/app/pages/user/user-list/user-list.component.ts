import {Component, OnInit} from '@angular/core';
import {DialogService, TableWidthConfig} from "ng-devui";
import {originSource, UserModel} from "../mock-data";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  activeLayoutTab: any = 'auto';
  layoutItems = [
    {
      id: 'fixed',
      title: 'fixed'
    },
    {
      id: 'auto',
      title: 'auto'
    }
  ];
  basicDataSource: Array<UserModel> = [];

  constructor(private dialogService: DialogService, private router: Router, private userService: UserService) {
    this.userService.users.subscribe(data => {
      this.basicDataSource = data;
    })
  }

  // basicDataSource: Array<UserModel> = JSON.parse(JSON.stringify(originSource.slice(0, 6)));
  dataTableOptions = {
    columns: [
      {
        field: 'name',
        header: 'Name',
        fieldType: 'text'
      },
      {
        field: 'role',
        header: 'Role',
        fieldType: 'text'
      }
    ]
  };


  ngOnInit() {
  }

  deleteRow(index: number) {
    const results = this.dialogService.open({
      id: 'delete-dialog',
      width: '346px',
      maxHeight: '600px',
      title: 'Delete',
      showAnimate: false,
      content: 'Are you sure you want to delete it?',
      backdropCloseable: true,
      onClose: () => {
      },
      buttons: [
        {
          cssClass: 'primary',
          text: 'Ok',
          disabled: false,
          handler: () => {
            this.basicDataSource.splice(index, 1);
            results.modalInstance.hide();
          },
        },
        {
          id: 'btn-cancel',
          cssClass: 'common',
          text: 'Cancel',
          handler: () => {
            results.modalInstance.hide();
          },
        },
      ],
    });
  }

  edit(id: string) {
    this.router.navigate(['users/edit/' + id])
  }
}

