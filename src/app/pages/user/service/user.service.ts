import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {originSource, UserModel} from "../mock-data";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users = new BehaviorSubject<UserModel[]>([] );
  public user = new BehaviorSubject<UserModel>(  null!);

  constructor() {
    this.getList();
  }

  addNewResult(data: UserModel) {
    if(data){
      this.users.next([...this.users.getValue(), data]);
    }
  }

  viewDetails(id: number) {
    let list = this.users.getValue().find(dat => dat.id == id)
    if(list)
    this.user.next(list);
    console.log(this.users, id);
  }

  updateResult(data: UserModel) {
    this.users.next(this.users.getValue().map(item => item.id === data.id ? data : item));

  }

  private getList = (): void => {
    this.users.next(originSource as any);
  }

}
