import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { HistoricoComponent } from './historico/historico';
import { SobreComponent } from './sobre/sobre';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '' }
];
