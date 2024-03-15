import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../models/project";

@Injectable({
	providedIn: "root",
})
export class ProjectService {
	constructor(private http: HttpClient) {}

	getProjects() {
		return this.http
			.get<any>("assets/data/projects.json")
			.toPromise()
			.then((res) => res.data as Project[])
			.then((data) => data);
	}
}
