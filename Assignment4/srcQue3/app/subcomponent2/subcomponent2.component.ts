import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

  public book=[];

  constructor(private _bookservice:BookService) { }

  ngOnInit() {
    this.book=this._bookservice.GetBookDetails();
  }

}
