import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {BrokerDetailPage} from '../broker-detail/broker-detail';
import {PropertyService} from '../../providers/property-service-rest';
import { PrescriptionsPage } from "../prescriptions/prescriptions";
import { MetricsPage } from "../metrics/metrics";
import { DiagnosesPage } from "../diagnoses/diagnoses";
import { ReferralsPage } from "../referrals/referrals";
import { OperationsPage } from "../operations/operations";

@Component({
    selector: 'page-property-detail',
    templateUrl: 'property-detail.html'
})
export class PropertyDetailPage {

    property: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public propertyService: PropertyService, public toastCtrl: ToastController) {
        this.property = this.navParams.data;
        propertyService.findById(this.property.EventId).then(
            property => this.property = property
        );
    }

    openBrokerDetail(broker) {
        this.navCtrl.push(BrokerDetailPage, broker);
    }

    metrics(event) {
        this.navCtrl.push(MetricsPage, event);
    }

    diagnoses(eventbroker) {
        this.navCtrl.push(DiagnosesPage, event);
    }
     
    prescriptions(event) {
        this.navCtrl.push(PrescriptionsPage, event);
    }
       
    referrals(broker) {
        this.navCtrl.push(ReferralsPage, event);
    }
     
    operations(broker) {
        this.navCtrl.push(OperationsPage, event);
    }

    favorite(property) {
        this.propertyService.favorite(property)
            .then(property => {
                let toast = this.toastCtrl.create({
                    message: 'Property added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(property) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
