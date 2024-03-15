import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectCerateComponent } from "./projectcreate.component";
import { ProjectCreateRoutingModule } from "./projectcreate-routing.module";
import { ButtonModule } from "primeng/button";
import { DropdownModule } from "primeng/dropdown";
import { CalendarModule } from "primeng/calendar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { RippleModule } from "primeng/ripple";
import { CheckboxModule } from "primeng/checkbox";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";
import { TimelineModule } from "primeng/timeline";
import { ToastModule } from "primeng/toast";
import { TableModule } from "primeng/table";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';


@NgModule({
	imports: [
		CommonModule,
		ButtonModule,
		FormsModule,
    ReactiveFormsModule,
		ProjectCreateRoutingModule,
		DropdownModule,
		CalendarModule,
		RippleModule,
		InputTextModule,
		FileUploadModule,
		InputTextareaModule,
		CheckboxModule,
		InputGroupModule,
		InputGroupAddonModule,
		TimelineModule,
		TableModule,
		ToastModule,
    DialogModule,
    TabViewModule
	],
	declarations: [ProjectCerateComponent],
})
export class ProjectCreateModule {}
