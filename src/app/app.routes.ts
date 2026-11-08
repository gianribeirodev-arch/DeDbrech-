import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalogo } from './pages/catalogo/catalogo';
import { Sobre } from './pages/sobre/sobre';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home, title: 'Brechó Misci | Início' },
  { path: 'catalogo', component: Catalogo, title: 'Brechó Misci | Catálogo' },
  { path: 'sobre', component: Sobre, title: 'Brechó Misci | Sobre' },
  { path: 'contato', component: Contato, title: 'Brechó Misci | Contato' },
  { path: '**', redirectTo: '' },
];
