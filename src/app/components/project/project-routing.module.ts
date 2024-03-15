import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'list', data: {breadcrumb: 'List', sidebar: 'projectListSidebar' }, loadChildren: () => import('./list/projectlist.module').then(m => m.ProjectListModule) },
    { path: 'create', data: {breadcrumb: 'Create', sidebar: 'projectCreateSidebar' }, loadChildren: () => import('./create/projectcreate.module').then(m => m.ProjectCreateModule) },
    { path: '', redirectTo: '/list', pathMatch: 'full'},
    { path: '**', redirectTo: '/list' }
])],
exports: [RouterModule]
})
export class ProjectRoutingModule { }
