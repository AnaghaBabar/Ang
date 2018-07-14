import { Component } from '@angular/core';

export interface Cities {
  name: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username;
  mobileno;

  cities: Cities[] = [
    {name: 'steak-0', viewValue: 'Goa'},
    {name: 'pizza-1', viewValue: 'Kashmir'},
    {name: 'tacos-2', viewValue: 'Manali'},
    {name: 'tacos-3', viewValue: 'Delli'},
    {name: 'tacos-4', viewValue: 'Kokan'}
  ];

  public SubmitDetails(username,mobileno)
  {
    this.username = username.value;
    this.mobileno = mobileno.value;

    console.log("username = "+this.username+" password = "+this.mobileno);
  }

}
