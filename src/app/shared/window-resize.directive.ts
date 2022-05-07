import { Directive, ElementRef, EventEmitter, HostBinding, Output } from '@angular/core';

@Directive({
  selector: '[windowResize]',
  host: {
    '(window:resize)': 'onResize()',
  }
})
export class WindowResizeDirective {
  @Output() resizeEvent: EventEmitter<number> = new EventEmitter<number>()

  @HostBinding('style.gridTemplateColumns') gridTemplateColumns: string;

  constructor(private elementRef: ElementRef) { 
    this.onResize();
  }

  // Get window width and change grid columns
  onResize() {
    const offsetWidth = this.getWidth();

    this.resizeEvent.emit(offsetWidth)

    if (offsetWidth <= 1000) {
      this.gridTemplateColumns = '1fr 1fr'
    }

    if (offsetWidth >= 2000) {
      this.gridTemplateColumns = '1fr 1fr 1fr 1fr'
    }
  }

  getWidth(): number {
    return this.elementRef.nativeElement.offsetWidth;
  }

}
