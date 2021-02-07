import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddfieldsService {
  //  httpOptionsPlain = {
  //   headers: new HttpHeaders({
  //     'Accept': 'text/plain',
  //     'Content-Type': 'text/plain'
  //   }),
  //   'responseType': 'text'
  // };
  constructor(private http:HttpClient) { }
   
  addFormsData(formdata){
          return this.http.post("http://localhost:8080/formdata",formdata);
    }

    getFormsData(){
      return this.http.get("http://localhost:8080/formdata");
    }
}
