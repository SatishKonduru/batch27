import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true,
})
export class BackgroundDirective implements OnInit {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}
  ngOnInit(): void {
    // this._el.nativeElement.style.backgroundColor = '#cdf'; (=> <= v16)
    // this._renderer.setStyle(this._el.nativeElement, 'background-color', '#080');
    // this._renderer.setStyle(this._el.nativeElement, 'color', '#fff');
    // this._renderer.setAttribute(
    //   this._el.nativeElement,
    //   'style',
    //   `background-color: orangered; color:white; font-weight: bold; display: flex; justify-content: center`
    // );
  }

  @HostListener('mouseenter') mEnter() {
    this._renderer.addClass(this._el.nativeElement, 'onHover');
  }
}
