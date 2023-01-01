import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private BASE_URL = "https://swapi.dev/api/people"

  constructor(private http: HttpClient) { }

  getPeople(page: number) {
    return this.http.get<Result>(`${this.BASE_URL}?page=${page}`)
  }
  
}

interface Result {
  results: Person[],
  count: number
}
