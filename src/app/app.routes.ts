import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login';
import { ShellComponent } from './components/shell/shell.component';

export const routes: Routes = [
  // al entrar a la raíz, redirige a /login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // pantalla de login SOLA (sin header/sidebar/footer)
  { path: 'login', component: LoginComponent },

  // todo lo que es “después del login” usa el shell con header+sidebar+footer
  {
    path: '',
    component: ShellComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },

  // cualquier ruta rara -> login
  { path: '**', redirectTo: 'login' },
];
