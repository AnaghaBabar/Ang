import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username;
  password;

  public login(username,password)
  {
    this.username = username.value;
    this.password = password.value;

    console.log("username = "+this.username+" password = "+this.password);
  }

}
