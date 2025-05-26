import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register/register.component'; // Ajusta la ruta si es distinta

export const routes: Routes = [
  {
    path: '',
    component: RegisterComponent, // Página principal es login
  },
  {
    path: '**',
    redirectTo: '', // Redirige cualquier ruta no válida al login
  },
];
