import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { PrescriptionsPage } from './prescriptions';

@NgModule({
  declarations: [
    PrescriptionsPage,
  ],
  imports: [
    //IonicModule.forChild(PrescriptionsPage),
  ],
  exports: [
    PrescriptionsPage
  ]
})
export class PrescriptionsPageModule {}
