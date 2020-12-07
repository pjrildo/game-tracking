import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Game } from 'src/app/shared/game/game';
import { GameService } from 'src/app/shared/game/game.service';
import { Publisher } from 'src/app/shared/publisher/publisher';
import { PublisherService } from 'src/app/shared/publisher/publisher.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.css']
})
export class CreateGameComponent implements OnInit {

  game = {} as Game;
  games: Game[];
  publishers: Publisher[];

  formGames : FormGroup

  submitted = false;

  constructor(private formBuilder : FormBuilder, private gameService : GameService, private publisherService : PublisherService) {}

  ngOnInit() {
    this.getPublishers();

    this.formGames = this.formBuilder.group(
      {
        title: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(80)]],
        release: ["", Validators.required],
        publisher: ["", Validators.required],
        description: ["", Validators.required]
      }
    );
  }

  get f() {
    return this.formGames.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.formGames.invalid) {
      return;
    }
  }

  cleanForm(formGames: FormGroup) {  
    formGames.reset();
    this.game = {} as Game;      
  }

  getPublishers() {
    this.publisherService.getPublishers().subscribe((publishers: Publisher[]) => {
      this.publishers = publishers;
    });
  }

  saveGame(formGames: FormGroup) {    
    console.log(this.game);
    this.gameService.saveGame(this.game).subscribe(() => {
      this.cleanForm(formGames);
    });  
  }

}
