import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {DevoteeCreateComponent} from "./create/devoteeCreate.component";
import {DevoteeSearchComponent} from "./search/devoteeSearch.component";
import {DevoteeDashboardComponent} from "./dashboard/devoteeDashboard.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Prime Icons' }, component: DevoteeDashboardComponent },
        { path: 'create', data: { breadcrumb: 'Prime Icons' }, component: DevoteeCreateComponent },
        { path: 'search', data: { breadcrumb: 'Prime Icons' }, component: DevoteeSearchComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class DevoteesRoutingModule { }
