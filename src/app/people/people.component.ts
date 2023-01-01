import { Component, OnInit } from '@angular/core';
import { Person } from '../model/person';
import { PeopleService } from '../service/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  people: Person[] = []
  p:any

  constructor(private service: PeopleService) { }

  ngOnInit(): void {
    this.getPeople()
    
  }

  getPeople() {
    for (let index = 1; index <= 9; index++) {
      let persons: Person[] = []
      this.service.getPeople(index).subscribe(res => {
        persons = res.results
        this.people.push(...persons)
      
      }) 
    }
  }

}
