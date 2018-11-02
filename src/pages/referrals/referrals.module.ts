import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ReferralsPage } from './referrals';

@NgModule({
  declarations: [
    ReferralsPage,
  ],
  imports: [
    //IonicModule.forChild(ReferralsPage),
  ],
  exports: [
    ReferralsPage
  ]
})
export class ReferralsPageModule {}
