import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs'

@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  retrieveTasks() {
    //let url = 'https://api.github.com/users/' + username;
    return this._http.get('http://pokeapi.co/api/v2/pokemon/1/').map(data=>data.json()).toPromise()
  }
}
