import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  title = 'Inter-Component Communication (ICC) in Angular';

  redirectP2C() {
    window.location.href = '/home/p2c';
  }

  redirectC2P() {
    window.location.href = '/home/c2p';
  }
}
