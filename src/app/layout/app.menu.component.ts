import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'COMPANY NAME',
                items: [
                    {
                        label: 'Projects',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/project/list']
                    },
                    {
                        label: 'Documents',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['/documents']
                    },
                    {
                        label: 'Team',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/team']
                    },
                    {
                        label: 'Calendar',
                        icon: 'pi pi-fw pi-calendar',
                        routerLink: ['/calendar']
                    },
                  ]
            }
        ];
    }
}
