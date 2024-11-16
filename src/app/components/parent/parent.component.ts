import { ChildComponent } from './../child/child.component';
import {
  Component,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { TopicComponent } from '../topic/topic.component';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [TopicComponent, ChildComponent, CommonModule, MatButtonModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent implements OnInit {
  topic = '@ViewChild()  & @ViewChildren()';

  childValue: string = '';
  // @ViewChild(ChildComponent, { static: true }) childComponent!: ChildComponent;

  // accessChild() {
  //   this.childValue = this.childComponent.childProperty;
  //   console.log(
  //     'Child Component Property: ',
  //     this.childComponent.childProperty
  //   );
  //   this.childComponent.getName();
  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit called ');
  //   console.log(
  //     'Child Component Property: ',
  //     this.childComponent.childProperty
  //   );
  // }
  ngOnInit(): void {}

  @ViewChildren(ChildComponent) childrenComponents!: QueryList<ChildComponent>;

  accessChildren() {
    this.childrenComponents.forEach((child, index) => {
      alert(`Child: ${index + 1} -> ${child.childProperty}`);
    });
  }
}
