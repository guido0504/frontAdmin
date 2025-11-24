import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login';
import { ShellComponent } from './components/shell/shell.component';
import { PostCreateComponent } from './components/post/create/post-create.component';
import { PostEditComponent } from './components/post/edit/post-edit.component';
import { PostViewComponent } from './components/post/view/post-view.component';

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

  // pantalla de crear post SOLA (sin header/sidebar/footer)
  { path: 'post/create', component: PostCreateComponent },

  // pantalla de editar post SOLA (sin header/sidebar/footer)
  { path: 'post/edit/:id', component: PostEditComponent },

  // pantalla de ver post SOLA (sin header/sidebar/footer)
  { path: 'post/view', component: PostViewComponent },

  // cualquier ruta rara -> login
  { path: '**', redirectTo: 'login' },
];
