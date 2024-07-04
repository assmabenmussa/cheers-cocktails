import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAlcoholStatus]',
  standalone: true
})
export class AlcoholStatusDirective implements OnChanges {
  @Input('appAlcoholStatus') status: "Non alcoholic" | "Alcoholic";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      this.applyStyles();
    }
  }

  private applyStyles(): void {
    this.renderer.setStyle(this.el.nativeElement, 'padding', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'textAlign', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '5px');
    if (this.status === 'Alcoholic') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#5e81ac');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    } else if (this.status === 'Non alcoholic') {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#ffdb00');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }
  }
}
