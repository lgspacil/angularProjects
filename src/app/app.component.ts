import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: HttpService){}

  showThis(){
    
    console.log(this._httpService.retrieveTasks());
  }

  title = 'Practice - app';

  num = 1;
	logNum(){
		console.log("num is: ", this.num);
	}

  incrementNum(){
    this.num = this.num + 1;
  }

  users = [];

  user = {
    firstName: '',
    lastName: '',
    email: ''
  }

  onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);

    //API(this.user)
    this.users.push(this.user)

    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
    return false;
  }

  showUser(){
    console.log(this.users);
  }
}
