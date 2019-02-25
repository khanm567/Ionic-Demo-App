import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'myTeams',
    pathMatch: 'full'
  },

  { path: 'myTeams', loadChildren: './my-teams/my-teams.module#MyTeamsPageModule' },
  { path: 'Games', loadChildren: './game/game.module#GamePageModule' },
  { path: 'Tournaments', loadChildren: './tournaments/tournaments.module#TournamentsPageModule' },
  { path: 'Details', loadChildren: './team-detail/team-detail.module#TeamDetailsPageModule' },
  { path: 'Teams', loadChildren: './teams/teams.module#TeamsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
