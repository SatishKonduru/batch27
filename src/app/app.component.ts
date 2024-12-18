import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PBindingComponent } from './components/p-binding/p-binding.component';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TempRefVariablesComponent } from './components/temp-ref-variables/temp-ref-variables.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { IfComponent } from './components/if/if.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';
import { ForComponent } from './components/for/for.component';
import { SenderComponent } from './components/sender/sender.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ArrayMethodsComponent } from './components/array-methods/array-methods.component';
import { ContentParentComponent } from './components/content-parent/content-parent.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { TopicComponent } from './components/topic/topic.component';
import { HomeComponent } from "./components/home/home.component";
import { BuiltInPipesComponent } from "./components/built-in-pipes/built-in-pipes.component";
import { CustomPipeComponent } from "./components/custom-pipe/custom-pipe.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    InterpolationComponent,
    PBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TempRefVariablesComponent,
    TwoWayDataBindingComponent,
    IfComponent,
    SwitchCaseComponent,
    ForComponent,
    SenderComponent,
    ViewChildComponent,
    ParentComponent,
    ArrayMethodsComponent,
    ContentParentComponent,
    ContentChildComponent,
    TopicComponent,
    HomeComponent,
    BuiltInPipesComponent,
    CustomPipeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'batch27';
}
