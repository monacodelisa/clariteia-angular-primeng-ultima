import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';

const routerOptions: ExtraOptions = {
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            { path: 'project', data: { breadcrumb: 'Project Management' }, loadChildren: () => import('./components/project/project.module').then(m => m.ProjectModule) },
            { path: '', redirectTo: '/project', pathMatch: 'full'}
        ]
    },
    { path: 'auth', data: { breadcrumb: 'Auth' }, loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
    { path: 'landing', loadChildren: () => import('./components/landing/landing.module').then(m => m.LandingModule) },
    { path: 'notfound', loadChildren: () => import('./components/notfound/notfound.module').then(m => m.NotfoundModule) },
    { path: 'notfound2', loadChildren: () => import('./components/notfound2/notfound2.module').then(m => m.Notfound2Module) },
    { path: '**', redirectTo: '/project/list' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
