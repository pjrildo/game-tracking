import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from './games/games.component';
import { PublishersComponent } from './publishers/publishers.component';
import { GameComponent } from './games/game/game.component';
import { PublisherComponent } from './publishers/publisher/publisher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    GamesComponent,
    PublishersComponent,
    GameComponent,
    PublisherComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
