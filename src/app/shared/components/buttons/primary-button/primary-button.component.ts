import { Component, Inject } from '@angular/core';
import { ButtonChildComponent } from '../button-child/button-child.component';
import { SquareButtonTypes } from '../square-button/square-button-types';
import { SquareButtonComponent } from '../square-button/square-button.component';

@Component({
  selector: 'app-primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.scss']
})
export class PrimaryButtonComponent extends ButtonChildComponent<
  SquareButtonTypes
> {
  constructor(@Inject(SquareButtonComponent) parent: SquareButtonComponent) {
    super();
    this.parent = parent;
  }
}
