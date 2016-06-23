import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "widgets",
  template:
    `<div class="container">  
      <i class="fa fa-diamond" aria-hidden="true"></i> 
      <pre (click)="selected.emit($event)">{{widgets|json}}</pre> 
      <i class="fa fa-diamond" aria-hidden="true"></i>
    </div>`
})
export class Widgets{
  @Input() widgets;
  @Output() selected = new EventEmitter();

}
