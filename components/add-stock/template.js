export default `
<style>
    :host {
        --border-color: #EEEEEE;
    } 
    form {
        width: 300px;
        box-sizing: border-box;
        border: 1px solid var(--border-color);
    }
    fieldset {
        border: 0;
        border-bottom: 1px solid var(--border-color);
        padding: 10px;
    }
    label {
        display: block;
    }
    input {
        width: 100%;
        height: 30px;
    }
</style>
<form action="#" id="addStocksForm">
    <fieldset>
        <label for="symbolSearch" id="test">Add symbol *</label>
        <input type="search" id="symbolSearch" list="symbolsList" required/>
        <datalist id="symbolsList"></datalist>
    </fieldset>
    <fieldset>
        <label for="amount" id="test">Number of contracts *</label>
        <input type="number" id="amount" required/>
    </fieldset>
    <fieldset>
        <label for="price" id="test">Buy price *</label>
        <input type="number" id="price" required/>
    </fieldset>
    <fieldset>
        <label for="totalPrice" id="test">Buy value</label>
        <span id="totalPrice"></span>
    </fieldset>
    <fieldset>
        <button id="submitButton" disabled>Submit</button>
    </fieldset>
</form>
`;