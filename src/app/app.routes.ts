import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Ajusta la ruta si es distinta

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent, // Página principal es login
  },
  {
    path: '**',
    redirectTo: '', // Redirige cualquier ruta no válida al login
  },
];
