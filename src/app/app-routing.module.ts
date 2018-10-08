import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot
} from '@angular/router';

import { CustomReuseStrategy } from './router-reuse.strategy';
import { UsersComponent } from './containers/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';
import { PeopleResolver } from './resolvers/peopleresolver';
const routes: Routes = [
  { path: 'users', component: UsersComponent, data: { state: 'users' } },
  { path: 'user/:id', component: UserComponent, data: { state: 'about' } },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'people',
    component: PeopleComponent,
    resolve: {
      people: PeopleResolver
    },
    children: [
      {
        path: ':id',
        component: PersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [PeopleResolver],
  exports: [RouterModule]
})
export class AppRoutingModule {}
