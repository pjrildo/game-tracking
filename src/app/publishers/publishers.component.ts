import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  publishers: any[] = [
    {
      "id": "1",
      "name": "CD Projekt Red",
      "founded": '1994',
      "headquarters": 'Polônia'
    },
    {
      "id": "2",
      "name": "CD Projekt Red",
      "founded": '1994',
      "headquarters": 'Polônia'
    },
    {
      "id": "3",
      "name": "CD Projekt Red",
      "founded": '1994',
      "headquarters": 'Polônia'
    },
    {
      "id": "4",
      "name": "CD Projekt Red",
      "founded": '1994',
      "headquarters": 'Polônia'
    },
    {
      "id": "5",
      "name": "CD Projekt Red",
      "founded": '1994',
      "headquarters": 'Polônia'
    }
  ];

}
