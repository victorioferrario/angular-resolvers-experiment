import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  ElementRef
} from '@angular/core';

import {
  SlimLoadingBarService,
  SlimLoadingBarEvent,
  SlimLoadingBarEventType
} from './slim-loading-bar.service';
import { isPresent } from './slim-loading-bar.utils';

/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
@Component({
  selector: 'app-slim-loading-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
<div class="slim-loading-bar">
    <div class="slim-loading-bar-progress" [style.width]="progress + '%'" [style.backgroundColor]="color" [style.color]="color"
        [style.height]="height" [style.opacity]="show ? '1' : '0'" [style.transition]="isTransition"></div>
</div>`
})
export class SlimLoadingBarComponent implements OnInit, AfterViewInit {
  isTransition = 'none';

  private _progress = '0';
  @Input()
  set progress(progress: string) {
    this.isTransition =
      progress >= this._progress ? 'all 0.5s ease-in-out' : 'none';
    this._progress = progress;
  }

  get progress() {
    return this._progress;
  }

  @Input()
  color = 'firebrick';
  @Input()
  height = '4px';
  @Input()
  show = true;

  constructor(
    public service: SlimLoadingBarService,
    private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.events.subscribe((event: SlimLoadingBarEvent) => {
      if (
        event.type === SlimLoadingBarEventType.PROGRESS &&
        isPresent(event.value)
      ) {
        this.progress = event.value;
      } else if (event.type === SlimLoadingBarEventType.COLOR) {
        this.color = event.value;
        console.log(this.color);
      } else if (event.type === SlimLoadingBarEventType.HEIGHT) {
        this.height = event.value;
      } else if (event.type === SlimLoadingBarEventType.VISIBLE) {
        this.show = event.value;
      }
    });
  }

  ngAfterViewInit(): void {
    this.service.events.subscribe((event: SlimLoadingBarEvent) => {
      this._elmRef.nativeElement.visible =
        event.type === SlimLoadingBarEventType.VISIBLE ? event.value : true;
      this._changeDetectorRef.detectChanges();
    });
  }
}
