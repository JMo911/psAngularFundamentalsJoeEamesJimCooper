import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent
} from './events/index'
import { Error404Component } from './errors/404.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component },

  {path: '', redirectTo: '/events', pathMatch: 'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
