import { Routes } from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  CreateEventComponent
} from './events/index'
import { Error404Component } from './errors/404.component';
// import { ProfileComponent } from './user/profile.component';
//jmo test

export const appRoutes: Routes = [
  // {
  //   path: 'user',
  //   loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  // },
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolver}},
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: '404', component: Error404Component },
  {path: '', redirectTo: '/events', pathMatch: 'full'}
]
