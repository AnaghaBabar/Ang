import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { IStudent } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  private _url:string = "/assets/Data/Student.json";

  GetStudDetails():Observable<IStudent[]>
  {
      return this.http.get<IStudent[]>(this._url);
  }
}
