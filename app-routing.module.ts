import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
const routes: Routes = [
  { path: 'table', component:TableComponent},
  { path: 'add', component:AddComponent},
  { path: '', redirectTo: 'table', pathMatch: 'full' },
  { path: 'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
