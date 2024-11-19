import { Component, ContentChild, OnInit } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child.component';

@Component({
  selector: 'app-content-parent',
  standalone: true,
  imports: [ContentChildComponent],
  templateUrl: './content-parent.component.html',
  styleUrl: './content-parent.component.css',
})
export class ContentParentComponent {
  @ContentChild(ContentChildComponent) cChild: ContentChildComponent;
  // ngOnInit() {
  //   console.log('Child Value in Parent: ', this.cChild.data);
  // }
  ngAfterContentInit() {
    console.log('Child Value in Parent: ', this.cChild.data);
  }
}
