import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})

export class ChildComponent {

  @Output() sendToParentEvent: EventEmitter<string> = new EventEmitter<string>();
  data: string = '';

  sendToParent() {
    this.sendToParentEvent.emit(this.data);
  }
}
