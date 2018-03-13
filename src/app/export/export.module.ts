import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExportComponent } from './export.component';
import { ExportRoutingModule } from './export-routing.module'

@NgModule({
  imports: [
    CommonModule,
    ExportRoutingModule
  ],
  declarations: [ExportComponent]
})
export class ExportModule { }
