import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-clear-rental',
  templateUrl: './clear-rental.component.html',
  styleUrls: ['./clear-rental.component.css']
})
export class ClearRentalComponent {
  
  @Output() rentalClear= new EventEmitter();
onRentalClearClick(){
   this.rentalClear.emit();
   
}
}
