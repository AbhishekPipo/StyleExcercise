import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './movie-display/movie-display.component';
import { FlopVotesComponent } from './flop-votes/flop-votes.component';
import { RentalCartComponent } from './rentalCart/rental-cart.component';
import { FlopBusterComponent } from './flop-buster/flop-buster.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { ClearRentalComponent } from './clear-rental/clear-rental.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDisplayComponent,
    FlopVotesComponent,
    RentalCartComponent,
    FlopBusterComponent,
    RentalListComponent,
    ClearRentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
