import template from './template';
import data from'../data/market-data';


export default class AddStock extends HTMLElement {
    constructor() {
        super();
        AddStock.template = document.createElement('template').innerHTML = template;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = AddStock.template;

        this.searchField = this.shadowRoot.querySelector('#symbolSearch');
        this.searchDataList = this.shadowRoot.querySelector('#symbolsList');
        this.amountField = this.shadowRoot.querySelector('#amount');
        this.priceField = this.shadowRoot.querySelector('#price');
        this.addStocksForm = this.shadowRoot.querySelector('#addStocksForm');
        this.totalPriceField = this.shadowRoot.querySelector('#totalPrice');
        this.submitButton = this.shadowRoot.querySelector('#submitButton');

        this.totalPrice;
        this.amount;
        this.price;
        this.key;
    }
    connectedCallback() {
        this.addStocksForm.addEventListener('change', e => {this.formElementChanged(e)});
        this.submitButton.addEventListener('click', e => {this.submitForm(e)});
        this.addSymbolsList();
    }

    createSymbolsList() {
        let list = data.entries.map(entry => {
            return entry.key;
        });
       return list;
    }
    addSymbolsList() {
        let list = this.createSymbolsList();
        list.forEach(item => {
            let option = document.createElement('option');
            option.value = item;
            this.searchDataList.appendChild(option);
        });
    }
    formElementChanged() {
        this.amount = Number(this.amountField.value);
        this.price = Number(this.priceField.value);
        this.key = this.searchField.value;
        if (this.amount && this.price && this.key) {
            this.totalPrice = this.amount * this.price;
            this.totalPriceField.innerHTML = this.totalPrice;
            this.submitButton.disabled = false;
        } else {
            this.totalPriceField.innerHTML = '';
            this.submitButton.disabled = true;
        }
    }
    emptyValues() {
        this.amountField.value = null;
        this.priceField.value = null;
        this.searchField.value = null;
        this.totalPriceField.innerHTML = '';
        this.submitButton.disabled = true;

        this.totalPrice = null;
        this.amount = null;
        this.price = null;
        this.key = null;
    }
    submitForm(e) {
        e.preventDefault();
        let dataObj = {
            'key': this.key,
            'price': this.price,
            'amount': this.amount,
            'totalPrice': this.totalPrice
        }
        this.emptyValues();
        let event = new CustomEvent('entryCreated', {bubbles: true, composed: true, detail: dataObj});
        this.dispatchEvent(event);
    }
    disconnectedCallback() {
        this.addStocksForm.removeEventListener('change', e => {this.formElementChanged(e)});
        this.submitButton.removeEventListener('submit', e => {this.submitForm(e)});
    }
  }
window.customElements.define('add-stock', AddStock);
