import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectCerateComponent } from './projectcreate.component';


@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ProjectCerateComponent }
    ])],
    exports: [RouterModule]
})
export class ProjectCreateRoutingModule { }
