import {Component} from '@angular/core';

@Component({
  selector: 'button-input',
  template:
    `<div class="container">
      <input type="text" #input>
      <p [style.color]="color"(click)="onClick($event, input.value)">{{title}}</p>
      {{input.value}}
    </div>
   <div class="container">
      <input type="text" #input> 
      <button (click)="onClick($event, input.value)">Click Me!</button>
      <br/> 
      <p>{{input.value}}</p>
    </div>`
})



export class ButtonAndInput {
  title = "BINDING!";
  color = "blue";

  onClick($event, value){
    console.log("$EVENT", $event);
    console.log("VALUE", value);
  }

}
