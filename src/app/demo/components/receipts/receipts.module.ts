import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReceiptsRoutingModule} from './receipts-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AutoCompleteModule} from "primeng/autocomplete";
import {CalendarModule} from "primeng/calendar";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {KeyFilterModule} from "primeng/keyfilter";
import {TableModule} from "primeng/table";
import {ProgressBarModule} from "primeng/progressbar";
import {SliderModule} from "primeng/slider";
import {RippleModule} from "primeng/ripple";
import {SVJPService} from "../../service/svjp/SVJP.service";
import {DevoteesModule} from "../devotees/devotees.module";
import {SkeletonModule} from "primeng/skeleton";
import {DialogModule} from "primeng/dialog";
import {ReceiptCreationComponent} from "./create/receiptCreation.component";
import {ReceiptDashboardComponent} from "./dashboard/receiptDashboard.component";

@NgModule({
    imports: [
        CommonModule,
        ReceiptsRoutingModule,
        InputTextModule,
        FormsModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        InputTextareaModule,
        InputTextModule,
        ReactiveFormsModule,
        KeyFilterModule,
        TableModule,
        ProgressBarModule,
        SliderModule,
        RippleModule,
        DevoteesModule,
        SkeletonModule,
        DialogModule
    ],
    providers: [SVJPService],
    declarations: [ReceiptCreationComponent, ReceiptDashboardComponent]
})
export class ReceiptsModule {
}

