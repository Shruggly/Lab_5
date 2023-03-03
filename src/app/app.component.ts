import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';


  buttonNum:number = 0;
  hide:boolean = true;


  onClick() {
    this.buttonNum++;
  }

  onDblClick() {
    if(this.hide == true) {
      this.hide = false;
    }else if (this.hide == false) {
      this.hide = true;
    }
  }

}
