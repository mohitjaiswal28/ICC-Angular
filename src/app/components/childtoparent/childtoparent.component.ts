import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-childtoparent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './childtoparent.component.html',
  styleUrl: './childtoparent.component.css'
})

export class ChildtoparentComponent {

  msg: string = '';

  redirectHome() {
    window.location.href = '/home/';
  }

  getDataFromChild(event: any) {
    this.msg = event;
  }
}
