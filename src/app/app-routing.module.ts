import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot([{ path: '',   redirectTo: '/auth', pathMatch: 'full' }])]
})
export class AppRoutingModule { }
