import { Component, OnInit } from '@angular/core';
import { ButtonParentComponent } from '../button-parent/button-parent.component';
import { SquareButtonTypes } from './square-button-types';

@Component({
  selector: 'app-square-button',
  templateUrl: './square-button.component.html',
  styleUrls: ['./square-button.component.scss']
})
export class SquareButtonComponent
  extends ButtonParentComponent<SquareButtonTypes>
  implements OnInit {
  constructor() {
    super();
  }

  ngOnInit() {}
}
