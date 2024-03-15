import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './projectlist.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProjectListComponent }
	])],
	exports: [RouterModule]
})
export class ProjectListRoutingModule { }
