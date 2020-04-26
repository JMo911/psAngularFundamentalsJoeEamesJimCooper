import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';

import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ]
})
export class UserModule { }
