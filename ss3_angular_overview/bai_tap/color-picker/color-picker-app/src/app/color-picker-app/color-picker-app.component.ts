import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-color-picker-app',
  templateUrl: './color-picker-app.component.html',
  styleUrls: ['./color-picker-app.component.css']
})
export class ColorPickerAppComponent implements OnInit {
  color = '#f00000';

  constructor() {
  }

  ngOnInit(): void {
  }
}
