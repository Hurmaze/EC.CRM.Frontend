import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsComponent } from './components/students/students.component';
import { FindMentorComponent } from './components/find-mentor/find-mentor.component';
import { CriteriasWizardComponent } from './components/criterias-wizard/criterias-wizard.component';
import { authenticationGuard } from './guards/authentication.guard';
import { authorizationGuard } from './guards/authorization.guard';
import { roles } from './common/roles';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [authenticationGuard] },
    { path: 'students', component: StudentsComponent, canActivate: [authenticationGuard]},
    { path: 'find-mentor', component: FindMentorComponent, canActivate: [authenticationGuard, authorizationGuard], data: { roles: [roles.director] } },
    { path: 'criterias-wizard', component: CriteriasWizardComponent, canActivate: [authenticationGuard, authorizationGuard], data: { roles: [roles.director] } },
    { path: '**', redirectTo: 'home' },
];
