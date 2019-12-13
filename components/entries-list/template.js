export default `
<style>
    :host {
        --border-color: #EEEEEE;
    } 
    table {
        font-size: 12px;
        text-align: left;
    }
    table td,
    table th {
        font-size: 12px;
        padding: 5px 10px;
    }
</style>
    <table id="entriesTable">
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Name</th>
                <th>Price</th>
                <th>#</th>
                <th>Bought</th>
                <th>Current</th>
                <th>Yield</th>
                <th></th>
            </tr>
        </thead>
        <tbody id="entriesTableBody"></tbody>
        <tfoot>
            <tr>
                <td colspan="4">Total</td>
                <td id="totalPrice"></td>
                <td id="lastTotalPrice"></td>
                <td id="totalYield"></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
`;