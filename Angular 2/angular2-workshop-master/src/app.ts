import {Component} from '@angular/core';
import {Widgets} from "components/widgets";
import {MoreWidgets} from "components/moreWidgets";
import {Home} from "components/home";
import {ButtonAndInput} from "components/buttonAndInput";
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'app',
  template:
    `<div class="container">
      <i class="fa fa-star" aria-hidden="true"></i>
      App Component!
      <i class="fa fa-star" aria-hidden="true"></i>
    </div>
    
    <more-widgets></more-widgets>
    
    <br/>
    
    <button-input></button-input>
      
    <br/>
  
    <home></home>`,
  directives:[Home, Widgets, MoreWidgets, ButtonAndInput],
  providers: [HTTP_PROVIDERS]
})



export class App {

}
