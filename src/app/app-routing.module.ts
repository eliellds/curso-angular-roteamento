import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Pages
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "sobre", component: SobreComponent, children: [
    { path: ":id/:username", component: SobreComponent }
  ] },
  { 
    path: "dashboard", 
    loadChildren: () => import('./dashboard/dashboard.module')
    .then( m => m.DashboardModule ) 
  },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
