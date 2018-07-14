import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  GetBookDetails()
  {
    return[
      {"name":"C prog lang", "price":600, "author":"Dennis Ritchi", "noofpages":70},
      {"name":"C++ prog lang", "price":700, "author":"Bajrne Stroustrup", "noofpages":80},
      {"name":"JAVA Black Book", "price":800, "author":"Nageshwar Rao", "noofpages":90},
    ];
  }
}
