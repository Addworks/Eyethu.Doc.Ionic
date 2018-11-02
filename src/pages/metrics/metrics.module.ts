import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MetricsPage } from './metrics';

@NgModule({
  declarations: [
    MetricsPage,
  ],
  imports: [
    //IonicModule.forChild(MetricsPage),
  ],
  exports: [
    MetricsPage
  ]
})
export class MetricsPageModule {}
