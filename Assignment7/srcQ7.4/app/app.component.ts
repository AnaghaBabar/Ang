import { Component } from '@angular/core';

export interface AuthorDetials {
  name: string;
  aname:string;
  pages: number;
  price: number;
}
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  books: AuthorDetials[] = [
    {name:'C',         aname: 'Ajay Mittal',     pages: 500,  price:420},
    {name:'C++',       aname: 'Bruce Ekle',      pages: 622,  price:300},
    {name:'Java',      aname: 'Nageshrao',       pages: 400,  price:450},
    {name:'Php',       aname: 'Rasmus',          pages: 300,  price:400},
    {name:'Musafir',   aname: 'Achut Godbole',   pages: 100,  price:200},
  ];

  displayedColumns: string[] = ['Name',  'Author',   'Pages',   'Price'];


}
