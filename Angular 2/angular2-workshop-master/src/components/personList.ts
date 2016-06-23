import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Card} from "./card"

@Component({
  selector: "person-list",
  styles: [
    '.person {cursor: pointer; cursor: hand}'
  ],
  template:
  `<div class="container">
    Person List
    <div class="container">
      <input type="text" [(ngModel)]="name">
      <button (click)="onClick(name)">Click Me!</button>
    </div>
    
    <br/>
    
    <div class="container">
      <div class="person" (mouseenter)="isActive=true" (mouseleave)="isActive=false">
        <i *ngIf="name" class="fa" [ngClass]="{'fa-star':isActive, 'fa-star-o':!isActive}"></i>
        <span>{{name}}</span>
      </div>
    </div>
    
    <br/>
    
    <div class="container">
      <card *ngFor="let person of people" [person]="person"></card>
    </div>
  </div>`,
  directives: [Card]
})
export class PersonList{
  @Input() people;
  @Output() select = new EventEmitter();

  onClick(value){
    this.select.emit(value);
  }
}
