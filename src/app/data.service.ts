import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, Observable} from "rxjs";
import {Characterdata} from "./characterdata";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<any> {
    return this.http.get('http://localhost:3000/characters');
  }

  addNewCharacter(character: Characterdata): Observable<any> {
    return this.http.post('http://localhost:3000/characters', JSON.stringify(character));
  }



}
