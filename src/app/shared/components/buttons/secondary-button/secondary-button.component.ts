import { Component, Inject } from '@angular/core';
import { ButtonChildComponent } from '../button-child/button-child.component';
import { SquareButtonTypes } from '../square-button/square-button-types';
import { SquareButtonComponent } from '../square-button/square-button.component';

@Component({
  selector: 'app-secondary-button',
  templateUrl: './secondary-button.component.html',
  styleUrls: ['./secondary-button.component.scss']
})
export class SecondaryButtonComponent extends ButtonChildComponent<
  SquareButtonTypes
> {
  constructor(@Inject(SquareButtonComponent) parent: SquareButtonComponent) {
    super();
    this.parent = parent;
  }
}
