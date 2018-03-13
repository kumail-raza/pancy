import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportComponent } from './export.component';
import { AuthGuardService } from '../auth/auth-guard.service';
const exportRoutes: Routes = [{
  path: 'export', component: ExportComponent, canActivate: [AuthGuardService]
}]

@NgModule({
  imports: [
      RouterModule.forChild(exportRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class ExportRoutingModule { }
