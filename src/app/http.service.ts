import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpClientModule} from '@angular/common/http';
import {User} from './dbclasses/User';

/*const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};*/


@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  postData(user: User){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin','*');
    //const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    //const body = { username: JSON.stringify(user.username).toString(), password: JSON.stringify(user.password)};
    const body = { username: user.username, password: user.password};
    //JSON.stringify(body.valueOf());
    //JSON.stringify(body);
    //const params = new HttpParams().set('username', body.username).set('password' , body.password);
    //$2a$10$/FNBIXbY9ci1gE/FUDs51.d/6mOKNnLhvL2tRkgmXhIkKpLXQSlyu
    //JSON.parse(body);
    const str = "username=I%27ve+done+it&password=123";
    //^[^\`\\\}\{\^}][A-zА-я]{6,12}$
    return this.http.post('http://localhost:8080/login', str,  {headers:myHeaders, withCredentials:true});
  }
  loginto(){
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded').set('Access-Control-Allow-Origin','*');
    const str = "username=I%27ve+done+it&password=123";
    return this.http.post('http://localhost:8080/login', str,  {headers:myHeaders, withCredentials: true});
  }
  getNews(){
    return this.http.get('http://localhost:8080/api/news/all',{withCredentials: true});

  }
}
