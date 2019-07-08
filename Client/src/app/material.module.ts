import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatTabsModule,
    MatTooltipModule,
    MatDialogModule,
    MatStepperModule
  ],
})
export class MaterialModule { }