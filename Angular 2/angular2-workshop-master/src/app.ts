import {Component} from '@angular/core';
import {Widgets} from "components/widgets"
import {Home} from "components/home"
import {ButtonAndInput} from "components/buttonAndInput"

@Component({
  selector: 'app',
  template:`
  <div class="container">
  <i class="fa fa-star" aria-hidden="true"></i>
  App Component!
  <i class="fa fa-star" aria-hidden="true"></i>
  </div>
  
  <widgets></widgets>
  
  <br/>
  
  <button-input></button-input>
    
  <br/>

  <home></home>
  `,
  directives:[Widgets, Home, ButtonAndInput]
})



export class App {

}
