import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {
  arrPeople=[
    { name: 'Kiên' ,age:'23'},
    { name: 'Nhân' ,age:'20'},
    { name: 'Đức' ,age:'22'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
