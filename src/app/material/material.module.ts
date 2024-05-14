import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';


const MaterialComponents=[
MatButtonModule,
MatToolbarModule,
MatIconModule,
MatCardModule,
MatIconModule,
MatInputModule,
MatCheckboxModule,
MatFormFieldModule,
MatDatepickerModule,
MatListModule,
MatDialogModule,
MatSelectModule,
MatSidenavModule,
MatTabsModule,
MatStepperModule,
MatRadioModule,
FormsModule,
ReactiveFormsModule,
MatTableModule,
MatExpansionModule,
MatDialogModule,
MatPaginatorModule,
MatGridListModule,
MatMenuModule



];


@NgModule({
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
