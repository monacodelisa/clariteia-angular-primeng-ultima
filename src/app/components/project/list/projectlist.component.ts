import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/service/project.service';

interface City {
  name: string;
  code: string;
}

@Component({
    templateUrl: './projectlist.component.html',
    styleUrls: ['./projectlist.component.scss'],
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];
    stage: any[] = [];
    cities: City[] | undefined;
    selectedCity: City | undefined;

    constructor(private projectService: ProjectService, private router: Router) { }

    ngOnInit() {
      this.projectService.getProjects().then(projects => this.projects = projects);

      this.stage = [
        { name: 'Under Analysis'},
        { name: 'Active'},
        { name: 'Archived'},
        { name: 'Completed'},
    ];

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
  }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains')
    }

    navigateToCreateProject(){
        this.router.navigate(['project/create'])
    }

}
