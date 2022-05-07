import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
  host: {
    '(mouseenter)': 'onMouseOver()',
    '(mouseleave)': 'onMouseLeave()',
  }

})
export class HighlightMouseDirective{

  onMouseOver() {
    this.backgroundColor = 'yellow'
  }

  onMouseLeave() {
    this.backgroundColor = 'white'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }


}
