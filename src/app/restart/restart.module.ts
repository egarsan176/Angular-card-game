import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    RestartDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class RestartModule { }
