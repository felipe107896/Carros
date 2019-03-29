import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './../app/cadastro/cadastro.component';
import { ConsultaComponent } from './../app/consulta/consulta.component';
import { PrincipalComponent } from './../app/principal/principal.component';
import { ModuleWithProviders }  from '@angular/core';


const appRoutes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: '', component: PrincipalComponent },
  { path: 'home', component: PrincipalComponent },
  { path: 'consulta', component: ConsultaComponent }

]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
