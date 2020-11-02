import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  formGames : FormGroup

  submitted = false;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.formGames = this.formBuilder.group(
      {
        title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
        release: ["", Validators.required],
        publisher: ["", Validators.required],
      }
    );
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

  get f() {
    return this.formGames.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.formGames.invalid) {
      return;
    }

  }
}
