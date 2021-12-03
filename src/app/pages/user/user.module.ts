import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserNewComponent } from './user-new/user-new.component';
import {UserListComponent} from "./user-list/user-list.component";
import {DataTableModule} from 'ng-devui/data-table';
import {ButtonModule, ModalModule, SelectModule, TabsModule, TagsInputModule, TagsModule, ToggleModule} from "ng-devui";
import {FormsModule} from "@angular/forms";
import {FormModule} from "ng-devui/form";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    UserNewComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    SharedModule,
    ModalModule,
    SelectModule,
    FormModule,
    TagsInputModule,
    UserRoutingModule,
    DataTableModule,
    TabsModule,
    ToggleModule
  ]
})
export class UserModule { }
