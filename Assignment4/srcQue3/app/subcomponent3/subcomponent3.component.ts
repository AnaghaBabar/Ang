import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-subcomponent3',
  templateUrl: './subcomponent3.component.html',
  styleUrls: ['./subcomponent3.component.css']
})
export class Subcomponent3Component implements OnInit {

  public book=[];

  constructor(private _bookservice:BookService) { }

  ngOnInit() {
    this.book=this._bookservice.GetBookDetails();
  }


}
