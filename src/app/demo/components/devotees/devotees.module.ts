import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevoteesRoutingModule} from './devotees-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {DevoteeCreateComponent} from "./create/devoteeCreate.component";
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
import {DevoteeSearchComponent} from "./search/devoteeSearch.component";
import {TableModule} from "primeng/table";
import {ProgressBarModule} from "primeng/progressbar";
import {SliderModule} from "primeng/slider";
import {RippleModule} from "primeng/ripple";
import {SVJPService} from "../../service/svjp/SVJP.service";
import {DevoteeDashboardComponent} from "./dashboard/devoteeDashboard.component";
import {DialogModule} from "primeng/dialog";

@NgModule({
    imports: [
        CommonModule,
        DevoteesRoutingModule,
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
        DialogModule
    ],
    providers: [SVJPService],
    exports: [
        DevoteeSearchComponent
    ],
    declarations: [DevoteeDashboardComponent, DevoteeCreateComponent, DevoteeSearchComponent]
})
export class DevoteesModule {
}

