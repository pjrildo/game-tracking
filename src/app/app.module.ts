import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { GamesComponent } from './games/games.component';
import { PublishersComponent } from './publishers/publishers.component';
import { GameComponent } from './games/game/game.component';
import { PublisherComponent } from './publishers/publisher/publisher.component';
import { CreateGameComponent } from './games/create-game/create-game.component';
import { CreatePublisherComponent } from './publishers/create-publisher/create-publisher.component';
import { CreateUserComponent } from './users/create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    GamesComponent,
    PublishersComponent,
    GameComponent,
    PublisherComponent,
    CreateGameComponent,
    CreatePublisherComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
