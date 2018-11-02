import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OperationsPage } from './operations';

@NgModule({
  declarations: [
    OperationsPage,
  ],
  imports: [
    //IonicModule.forChild(OperationsPage),
  ],
  exports: [
    OperationsPage
  ]
})
export class OperationsPageModule {}
