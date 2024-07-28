import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parenttochild',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parenttochild.component.html',
  styleUrl: './parenttochild.component.css'
})

export class ParenttochildComponent {
  name: string = 'Mohit';

  redirectHome() {
    window.location.href = '/home/';
  }
}
