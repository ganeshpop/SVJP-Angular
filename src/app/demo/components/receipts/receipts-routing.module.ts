import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ReceiptDashboardComponent} from "./dashboard/receiptDashboard.component";
import {ReceiptCreationComponent} from "./create/receiptCreation.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: { breadcrumb: 'Prime Icons' }, component: ReceiptDashboardComponent },
        { path: 'create', data: { breadcrumb: 'Prime Icons' }, component: ReceiptCreationComponent },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ReceiptsRoutingModule { }
