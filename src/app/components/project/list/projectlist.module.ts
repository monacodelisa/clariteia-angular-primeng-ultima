import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProjectListRoutingModule } from './projectlist-routing.module';
import { ProjectListComponent } from './projectlist.component';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
	imports: [
		CommonModule,
    FormsModule,
		ProjectListRoutingModule,
		RippleModule,
		ButtonModule,
		InputTextModule,
		TableModule,
		ProgressBarModule,
    DropdownModule
	],
	declarations: [ProjectListComponent]
})
export class ProjectListModule { }
