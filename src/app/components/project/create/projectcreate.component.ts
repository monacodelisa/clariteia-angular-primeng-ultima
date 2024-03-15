import { Component, OnInit } from "@angular/core";
import {
	AbstractControl,
	FormBuilder,
	ValidatorFn,
	Validators,
} from "@angular/forms";
import { MessageService } from "primeng/api";
import { Project } from "src/app/models/project";
import { TeamMember } from "src/app/models/team";
import { ProjectService } from "src/app/service/project.service";

interface City {
	name: string;
	code: string;
}

@Component({
	selector: "app-projectcreate",
	templateUrl: "./projectcreate.component.html",
	styleUrl: "./projectcreate.component.scss",
	providers: [MessageService],
})
export class ProjectCerateComponent implements OnInit {
	events: any[] = [];
	activeTab = "upload";
	activeCard = "";
	displayedFiles: any[] = [];
	uploadedFiles: any[] = [];
	fileUploaded: boolean = false;
	maxFileSize = 20000000;
	maxFileSizeExceeded: boolean = false;
	allowedFormats = ["pdf", "doc", "xls"];
	wrongFileFormat: boolean = false;
	projects: Project[] = [];
	dialogIsVisible: boolean = false;
	teamMembersSelection: TeamMember[] = [];
	availableTeamMembers: TeamMember[] = [];
  tabs: { icon: string, title: string, content: string }[] = [];

	cities: City[] | undefined;
	selectedCity: City | undefined;

	newProjectForm = this.fb.group({
		projectName: [
			"",
			[
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(125),
				this.invalidCharactersValidator(),
			],
		]
	});

	teamMembersAdded: TeamMember[] = [];

  newTeamMemberForm = this.fb.group({
		teamMemberName: [
			"",
			[
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(125),
        this.invalidCharactersValidator()
			],
		],
    teamMemberTitle: [
			"",
			[
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(125),
				this.invalidCharactersValidator(),
			],
		],
		teamMemberType: [
			"",
			[
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(125),
				this.invalidCharactersValidator(),
			],
		],
	});

	constructor(
		private fb: FormBuilder,
		private projectService: ProjectService
	) {}

	ngOnInit(): void {
		this.cities = [
			{ name: "New York", code: "NY" },
			{ name: "Rome", code: "RM" },
			{ name: "London", code: "LDN" },
			{ name: "Istanbul", code: "IST" },
			{ name: "Paris", code: "PRS" },
		];

		this.events = [
			{ status: "Upload documents", color: "#3B82F6" },
			{ status: "Select team", color: "#3B82F6" },
			{ status: "Review information", color: "#3B82F6" },
		];

    // selection needs correction selectedTeamMember returns all
		this.availableTeamMembers = [
			{ id: 1, name: "John Doe", title: "-", type: "-" },
			{ id: 2, name: "Jane Doee", title: "Architect", type: "Global" },
			{ id: 3, name: "Jane Doeee", title: "Architect", type: "Global" },
			{ id: 4, name: "Janee Doe", title: "Architect", type: "Global" },
			{ id: 5, name: "Jane Doewl", title: "Architect", type: "Global" },
		];

		this.displayedFiles.length = 0;

		this.projectService
			.getProjects()
			.then((projects) => (this.projects = projects));

		this.newProjectForm.get("projectName")?.valueChanges.subscribe((value) => {
			if (value !== null) {
				this.checkForDuplicateProject(value);
				this.checkForInvalidCharacters(value);
			}
		});
	}

	invalidCharactersValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const invalidCharacters = /[^.,@#%$()?!\s\p{L}\p{N}\p{M}]/u;
			if (invalidCharacters.test(control.value)) {
				return { invalidCharacters: true };
			}
			return null;
		};
	}

	checkForDuplicateProject(projectName: string) {
		const isDuplicate = this.projects.some(
			(project) => project.name === projectName
		);

		if (isDuplicate) {
			this.newProjectForm
				.get("projectName")
				?.setErrors({ duplicateProjectName: true });
		} else {
			const currentErrors = {
				...this.newProjectForm.get("projectName")?.errors,
			};
			delete currentErrors["invalidCharacters"];
			this.newProjectForm.get("projectName")?.setErrors(currentErrors);
			this.newProjectForm.get("projectName")?.markAsPristine();
			this.newProjectForm.get("projectName")?.markAsUntouched();
		}
	}

	checkForInvalidCharacters(projectName: string) {
		const control = this.newProjectForm.get(
			"projectName"
		) as AbstractControl<string>;

		const hasInvalidCharacters = this.invalidCharactersValidator()(control);

		if (hasInvalidCharacters) {
			this.newProjectForm
				.get("projectName")
				?.setErrors({ invalidCharacters: true });
		} else {
			const currentErrors = {
				...this.newProjectForm.get("projectName")?.errors,
			};
			delete currentErrors["invalidCharacters"];
			this.newProjectForm.get("projectName")?.setErrors(currentErrors);
			this.newProjectForm.get("projectName")?.markAsPristine();
			this.newProjectForm.get("projectName")?.markAsUntouched();
		}
	}

	onUpload(event: any) {
		if (event && event.files && event.files.length > 0) {
			for (const file of event.files) {
				this.displayedFiles.push(file);
				this.displayedFiles = [...this.displayedFiles];
				if (file.size > this.maxFileSize || !this.formatAllowed(file)) {
					this.maxFileSizeExceeded = true;
					this.wrongFileFormat = true;
				} else {
					this.uploadedFiles.push(file);
				}
			}

			if (event.originalEvent.status == 200) {
				this.fileUploaded = true;
			} else {
				this.fileUploaded = false;
			}
		}
	}

	formatAllowed(file: File): boolean {
		const allowedFormats = ["pdf", "doc", "xls"];
		return allowedFormats.some((format) =>
			file.name.toLowerCase().includes(format)
		);
	}

	removeFile(file: File) {
		const index = this.displayedFiles.indexOf(file);
		if (index !== -1) {
			this.displayedFiles = this.displayedFiles
				.slice(0, index)
				.concat(this.displayedFiles.slice(index + 1));
		}
	}

	onSubmit() {
		this.newProjectForm.markAllAsTouched();
		if (this.newProjectForm.invalid) {
			return;
		}
	}

	showDialog() {
		this.dialogIsVisible = true;
	}

  addAvailableTeamMember() {
    const teamMember = {
      id: this.availableTeamMembers.length + 1,
	name: this.newTeamMemberForm.get('teamMemberName')?.value || '',
	title: this.newTeamMemberForm.get('teamMemberTitle')?.value || '',
	type: this.newTeamMemberForm.get('teamMemberType')?.value || ''
    };
    this.availableTeamMembers.push(teamMember);
    this.newTeamMemberForm.reset();
  }

  addTeamMembers() {
    for (const teamMember of this.teamMembersSelection) {
      const existingMember = this.teamMembersAdded.find(member => member.id === teamMember.id);
      if (!existingMember) {
        this.teamMembersAdded.push(teamMember);
      }
    }
    this.teamMembersAdded = [...this.teamMembersAdded];
    this.dialogIsVisible = false;
  }

  removeTeamMember(teamMember: TeamMember) {
		const index = this.teamMembersAdded.indexOf(teamMember);
		if (index !== -1) {
			this.teamMembersAdded = this.teamMembersAdded
				.slice(0, index)
				.concat(this.teamMembersAdded.slice(index + 1));
		}
	}

	clickBack(step: string) {
		this.activeTab = step;
	}

	clickNext(step: string) {
		this.activeTab = step;
	}
}
