export default `
    <style>
        body {
            height: 100%;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }
        :host {
            font-family: Helvetica, Verdana, sans-serif;
            line-height: 1.5em;
        }
        .container {
            width: 100%;
            display: flex;
            flex-direction: row;
        }
        .column {
            
        }
    </style>
    <h1>Test application</h1>
    <div class="container">
    <div class="column">
        <add-stock></add-stock>
    </div>
    <div class="column">
        <entries-list></entries-list>
    </div>
        
    </div>
`;