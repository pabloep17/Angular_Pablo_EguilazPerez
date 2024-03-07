import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SaludoComponent } from './saludo/saludo.component';
import { CronometroComponent } from './cronometro/cronometro.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'saludo', component: SaludoComponent},
  { path: 'crono', component: CronometroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
