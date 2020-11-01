import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  games: any[] = [
    {
      "id": "1",
      "name": "Cyberpunk 2077",
      "release": '10/12/2020',
      "publisher": 'CD Projekt Red'
    },
    {
      "id": "2",
      "name": "Cyberpunk 2077",
      "release": '10/12/2020',
      "publisher": 'CD Projekt Red'
    },
    {
      "id": "3",
      "name": "Cyberpunk 2077",
      "release": '10/12/2020',
      "publisher": 'CD Projekt Red'
    },
    {
      "id": "4",
      "name": "Cyberpunk 2077",
      "release": '10/12/2020',
      "publisher": 'CD Projekt Red'
    },
    {
      "id": "5",
      "name": "Cyberpunk 2077",
      "release": '10/12/2020',
      "publisher": 'CD Projekt Red'
    }
  ];

}
