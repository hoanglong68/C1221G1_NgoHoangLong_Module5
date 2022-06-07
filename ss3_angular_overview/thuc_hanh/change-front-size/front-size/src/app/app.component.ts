import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-size';
  fontSize = 14;

  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}

