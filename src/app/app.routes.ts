import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login';
import { ShellComponent } from './components/shell/shell.component';
import { PostCreateComponent } from './components/post/create/post-create.component';
import { PostEditComponent } from './components/post/edit/post-edit.component';
import { PostViewComponent } from './components/post/view/post-view.component';
import { UserCreateComponent } from './components/user/create/user-create/user-create.component';
import { TypeEventViewComponent } from './components/type-event/type-event-view/type-event-view.component';
import { TypeEventCreateComponent } from './components/type-event/type-event-create/type-event-create.component';
import { TypeEventEditComponent } from './components/type-event/type-event-edit/type-event-edit.component';

export const routes: Routes = [
  // al entrar a la raíz, redirige a /login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // pantalla de login SOLA (sin header/sidebar/footer)
  { path: 'login', component: LoginComponent },

  // todo lo que es “después del login” usa el shell con header+sidebar+footer
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'post/create', component: PostCreateComponent },
      { path: 'post/edit/:id', component: PostEditComponent },
      { path: 'post/view', component: PostViewComponent },
      { path: 'user/create', component: UserCreateComponent },
      { path: 'type-event/view', component: TypeEventViewComponent },
      { path: 'type-event/create', component: TypeEventCreateComponent },
      { path: 'type-event/edit/:id', component: TypeEventEditComponent },
      { path: 'post/view', component: PostViewComponent },
      { path: 'post/create', component: PostCreateComponent },
      { path: 'post/edit/:id', component: PostEditComponent },
    ],
  },

  // cualquier ruta rara -> login
  { path: '**', redirectTo: 'login' },
];
