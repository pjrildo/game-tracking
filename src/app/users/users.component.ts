import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users: any[] = [
    {
      "id": "1",
      "name": "Rildo Alves",
      "age": '21',
      "registered": '11/09/2013'
    },
    {
      "id": "2",
      "name": "Rildo Alves",
      "age": '21',
      "registered": '11/09/2013'
    },
    {
      "id": "3",
      "name": "Rildo Alves",
      "age": '21',
      "registered": '11/09/2013'
    },
    {
      "id": "4",
      "name": "Rildo Alves",
      "age": '21',
      "registered": '11/09/2013'
    },
    {
      "id": "5",
      "name": "Rildo Alves",
      "age": '21',
      "registered": '11/09/2013'
    }
  ];

}
