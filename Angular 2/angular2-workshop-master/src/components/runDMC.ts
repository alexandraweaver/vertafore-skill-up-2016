import {Component, Input} from "@angular/core";

@Component({
  selector: "run-dmc",
  template:
    `<div class="container"> 
      <i class="fa fa-bolt fa-spin" aria-hidden="true"></i> 
      {{whosHouse}} 
      <i class="fa fa-bolt fa-spin" aria-hidden="true"></i> 
      <br/> 
      <i class="fa fa-bolt fa-spin" aria-hidden="true"></i> 
      {{runsHouse}}
      <i class="fa fa-bolt fa-spin" aria-hidden="true"></i>
    </div>`
})
export class RunDMC{
  @Input() whosHouse;
  @Input() runsHouse;
}
