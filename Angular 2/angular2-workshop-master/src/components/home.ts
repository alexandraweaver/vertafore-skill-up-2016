import {Component} from "@angular/core";

@Component({
  selector: "home",
  template: '' +
  '<div class="container">' +
  '<i class="fa fa-bolt fa-spin" aria-hidden="true"></i>' +
  ' Who\'s House? ' +
  '<i class="fa fa-bolt fa-spin" aria-hidden="true"></i>' +
    '<br/>' +
  '<i class="fa fa-bolt fa-spin" aria-hidden="true"></i>' +
  ' RUN\'S HOUSE! ' +
  '<i class="fa fa-bolt fa-spin" aria-hidden="true"></i>' +
  '</div>' + '<br/>' +

  '<div class="container">' +
  '<input type="text" #input> ' +
  '<button (click)="onClick($event, input.value)">Click Me!</button>' +
  '<br/>' + '<p>{{input.value}}</p>'+
  '</div>'
})
export class Home{
  onClick($event, value) {
    console.log("Event: ", $event);
    console.log("Value: ", value);
  }

}
