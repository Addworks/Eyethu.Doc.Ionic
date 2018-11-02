import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { DiagnosesPage } from './diagnoses';

@NgModule({
  declarations: [
    DiagnosesPage,
  ],
  imports: [
    //IonicModule.forChild(DiagnosesPage),
  ],
  exports: [
    DiagnosesPage
  ]
})
export class DiagnosesPageModule {}
