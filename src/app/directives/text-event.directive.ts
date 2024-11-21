import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTextEvent]',
  standalone: true,
})
export class TextEventDirective {
  constructor() {}
  @Output() textEvent = new EventEmitter<{ type: string; content: string }>();
  @HostListener('copy', ['$event']) onCopy(event: ClipboardEvent) {
    const content = event.clipboardData?.getData('text');
    console.log('Copied:', content);
    this.textEvent.emit({ type: 'copy', content });
  }

  @HostListener('cut', ['$event']) onCut(e: ClipboardEvent) {
    const content = e.clipboardData?.getData('text') || '';
    console.log('In Custom Directive: ', content);
    this.textEvent.emit({ type: 'cut', content });
  }

  @HostListener('paste', ['$event']) onPaste(e: ClipboardEvent) {
    const content = e.clipboardData?.getData('text') || '';
    console.log('In Custom Directive: ', content);
    this.textEvent.emit({ type: 'paste', content });
  }
}
