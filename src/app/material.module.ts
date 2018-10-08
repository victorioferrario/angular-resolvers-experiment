import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatTableModule,
  MatListModule,
  MatProgressSpinnerModule
} from '@angular/material';

const COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatListModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatButtonModule,
  MatBottomSheetModule,
  MatSnackBarModule,
  MatTableModule
];

@NgModule({
  imports: [COMPONENTS],
  exports: [COMPONENTS]
})
export class MaterialModule {}
