import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthGuardService } from './auth-guard.service'
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuardService],
  declarations: [AuthComponent]
})
export class AuthModule { }
