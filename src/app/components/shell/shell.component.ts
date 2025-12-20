import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class ShellComponent {
  sidebarOpen = false;

  onSidebarChange(isOpen: any) {
    this.sidebarOpen = isOpen;
  }
}
