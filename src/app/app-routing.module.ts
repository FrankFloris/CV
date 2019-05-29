import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {LegePaginaComponent} from "./lege-pagina/lege-pagina.component";
import {CvPaginaComponent} from "./cv-pagina/cv-pagina.component";
import {GamesPaginaComponent} from "./games-pagina/games-pagina.component";
import {OverFrankComponent} from "./over-frank/over-frank.component";

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'cv', component: CvPaginaComponent},
  {path: 'games', component: GamesPaginaComponent},
  {path: 'frank', component: OverFrankComponent},
  {path: 'leeg', component: LegePaginaComponent},
  {path: '', component: WelcomeComponent},
  {path: '**', component: WelcomeComponent}
]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)
    // ,CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
