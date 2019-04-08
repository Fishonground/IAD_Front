import {User_status} from "./User_status";
import {People} from "./People";

export class User{
  username: string;
  login:string;
  password: string;
  usersStatusByStatus: User_status;
  peopleByPeopleId: People;

  // constructor(login: string, password: string){
  //   this.login = login;
  //   this.password = password;
  // }
}

