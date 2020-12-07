import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { PlataformsComponent } from './plataforms/plataforms.component';
import { GendersComponent } from './genders/genders.component';
import { GenderComponent } from './genders/gender/gender.component';
import { CreateGenderComponent } from './genders/create-gender/create-gender.component';
import { PlataformComponent } from './plataforms/plataform/plataform.component';
import { CreatePlataformComponent } from './plataforms/create-plataform/create-plataform.component';

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
    PlataformsComponent,
    GendersComponent,
    GenderComponent,
    CreateGenderComponent,
    PlataformComponent,
    CreatePlataformComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
