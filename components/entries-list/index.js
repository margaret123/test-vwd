import template from './template';
import data from'../data/market-data'


export default class EntriesList extends HTMLElement {
    constructor() {
        super();
        EntriesList.template = document.createElement('template').innerHTML = template;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = EntriesList.template;

        this.entries = [];

        this.tableBody = this.shadowRoot.querySelector('#entriesTableBody');
        this.totalPriceCell = this.shadowRoot.querySelector('#totalPrice');
        this.lastTotalPriceCell = this.shadowRoot.querySelector('#lastTotalPrice');
        this.totalYieldCell = this.shadowRoot.querySelector('#totalYield');
    }
    connectedCallback() {
        document.addEventListener('entryCreated', e => {this.addEntry(e)});
    }

    addEntry(e) {
        let entry = e.detail;
        let newEntry = {};
        data.entries.forEach(element => {
            if(element.key === entry.key) {
                newEntry.key = element.key;
                newEntry.name = element.name;
                newEntry.lastPrice = element.lastPrice;
                newEntry.amount = entry.amount;
                newEntry.totalPrice = entry.totalPrice;
                newEntry.lastTotalPrice = Math.floor(element.lastPrice * entry.amount);
                newEntry.yield = Math.floor((newEntry.lastTotalPrice - newEntry.totalPrice) * 100 / newEntry.totalPrice);
            }
        });
        this.entries.push(newEntry);

        this.displayEntry(newEntry);
    }

    displayEntry(entry) {
        let row = document.createElement('tr');
        Object.keys(entry).forEach(key=>{
            let cell = document.createElement('td');
            if (key === 'yield') {
                cell.innerHTML = entry[key] > 0 ? `+ ${entry[key]} %` : `${entry[key]} %`;
            } else {
                cell.innerHTML = entry[key];
            }
            
            row.appendChild(cell);
         });
         this.tableBody.appendChild(row);
         this.calculateTotal();
    }

    calculateTotal() {
        let totalPrice = 0;
        let lastTotalPrice = 0;
        let totalYield = 0;
        this.entries.forEach(entry => {
            totalPrice += entry.totalPrice;
            lastTotalPrice += entry.lastTotalPrice;
            totalYield += entry.yield;
        });

        this.totalPriceCell.innerHTML = totalPrice;
        this.lastTotalPriceCell.innerHTML = lastTotalPrice;
        this.totalYieldCell.innerHTML = totalYield > 0 ? `+ ${totalYield} %` : `${totalYield} %`;
    }
    
    disconnectedCallback() {
        this.removeEventListener('entryCreated', e => {this.addEntry(e)});
    }
  }
window.customElements.define('entries-list', EntriesList);
