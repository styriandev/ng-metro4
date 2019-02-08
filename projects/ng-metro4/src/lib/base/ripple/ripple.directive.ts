import {Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {AttributeHelper} from '../../helper/attribute-helper';

declare var $: any;

@Directive({
  selector: '[m4-ripple]'
})
export class RippleDirective implements OnInit, OnChanges {
  @Input('ripple-target') rippleTarget: string;
  @Input('ripple-color') rippleColor: string;
  @Input('ripple-alpha') rippleAlpha: number;

  rippleObj: any;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  private createElement() {
    AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-target', this.rippleTarget);
    AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-color', this.rippleColor);
    AttributeHelper.setAttribute(this.renderer, this.element, 'data-ripple-alpha', this.rippleAlpha);

    setTimeout(() => {
      if (!this.rippleObj) {
        this.rippleObj = $(this.element.nativeElement).ripple().data('ripple');
      }
    }, 0);
  }

  ngOnInit(): void {
    this.createElement();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createElement();
  }
}