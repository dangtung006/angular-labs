import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonBaseModule } from './pokemon-base/pokemon-base.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './notFound/notFound.component';
import { AppRoutesModule } from './appRoutes/appRoutes.module';

@NgModule({
  declarations: [		
      AppComponent,
      HomeComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    PokemonBaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
