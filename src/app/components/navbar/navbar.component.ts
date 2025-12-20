import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { LoginService } from '../../service/login/login';

@Component({
  selector: 'app-navbar',
  imports: [PanelMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output() sidebarChange = new EventEmitter<boolean>();

  private offcanvasElement?: HTMLElement | null;
  private onShown = () => this.sidebarChange.emit(true);
  private onHidden = () => this.sidebarChange.emit(false);

  constructor(private route: Router, public loginService: LoginService) {}

  ngAfterViewInit(): void {
    // ID del offcanvas que tenés en navbar.component.html
    this.offcanvasElement = document.getElementById('offcanvasNavbar');

    if (this.offcanvasElement) {
      this.offcanvasElement.addEventListener(
        'shown.bs.offcanvas',
        this.onShown
      );
      this.offcanvasElement.addEventListener(
        'hidden.bs.offcanvas',
        this.onHidden
      );
    }
  }

  ngOnDestroy(): void {
    if (this.offcanvasElement) {
      this.offcanvasElement.removeEventListener(
        'shown.bs.offcanvas',
        this.onShown
      );
      this.offcanvasElement.removeEventListener(
        'hidden.bs.offcanvas',
        this.onHidden
      );
    }
  }

  login() {
    this.route.navigate(['/login']);
  }

  ruta(ruta: string) {
    this.route.navigate([ruta]);
  }
}
