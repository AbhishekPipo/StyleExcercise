import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css'],
})
export class MovieDisplayComponent {
  @Input() movie: any;
tileBorder="";
selected=false;
  // @Output() rentMovie = new EventEmitter();

  // onRentalButtonClick() {
  //   // send signal to parent

  //   this.rentMovie.emit(this.movie);
  // }


  ngOnInit(){

    // if(this.movie.stars < 4){
    //  this.tileBorder= '3px solid red'

    // }
  }
  // btnColor="red"

  onClick(){
    // this.btnColor="black";
    this.selected=true;
  }
  getBtnTextColorClass(){
    if(this.selected){
return "text-dark"
    }else if(this.movie.onSale){
      return "text-danger";
    }else{
      return ""
    }
  }
}
