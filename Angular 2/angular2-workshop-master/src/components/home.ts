import {Component} from "@angular/core";
import {Widgets} from "./widgets";
import {PersonList} from "./personList";
import {RunDMC} from "./runDMC";
import {StarWars} from "../services/starWars";

@Component({
  selector: "home",
  template:
    `<div class="container"> 
      <run-dmc [whosHouse]="whosHouse" [runsHouse]="runsHouse"></run-dmc> 
    </div>  
    <br/> 
  
    <div class="container"> 
      <widgets [widgets]="parentWidgets" (selected)="onSelect($event)"></widgets> 
    </div>  
    <br/> 
  
    <div class="container"> 
      <person-list [people]="starWars.people | async" (select)="onSelect($event)"></person-list> 
    </div>`,
  directives: [RunDMC, Widgets, PersonList],
  providers: [StarWars]
})
export class Home{
  constructor(public starWars:StarWars){};

  parentWidgets = [
    {name: "Widget1"},
    {name: "Widget2"},
    {name: "Widget3"}
  ];

  onSelect(value){
    console.log("Value: ", value);
  };

  onClick($event, value) {
    console.log("Event: ", $event);
    console.log("Value: ", value);
  };

  whosHouse = " Who's House? ";
  runsHouse = " RUN'S HOUSE! ";

}
