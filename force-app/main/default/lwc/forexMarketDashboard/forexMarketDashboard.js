import { LightningElement, track } from 'lwc';
import getMarketData from '@salesforce/apex/DerivService.getMarketData';

export default class ForexMarketDashboard extends LightningElement {
    @track marketData = {}; // Store fetched market data

    connectedCallback() {
        this.fetchMarketData();
    }

    fetchMarketData() {
        getMarketData()
            .then((data) => {
                this.marketData = JSON.parse(data); // Parse JSON data from Apex
                console.log('Market data fetched:', this.marketData);
            })
            .catch((error) => {
                console.error('Error fetching market data:', error);
            });
    }
}
