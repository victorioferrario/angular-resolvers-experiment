import { Component, Inject } from '@angular/core';
import { ButtonChildComponent } from '../button-child/button-child.component';
import { SquareButtonTypes } from '../square-button/square-button-types';
import { SquareButtonComponent } from '../square-button/square-button.component';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent extends ButtonChildComponent<
  SquareButtonTypes
> {
  constructor(@Inject(SquareButtonComponent) parent: SquareButtonComponent) {
    super();
    this.parent = parent;
  }
}
