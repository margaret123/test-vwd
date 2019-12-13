# To run the app

`npm i`

`npm run build`

`npm start`


# IntakeTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.15.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


# Assignment

## Task

Create a (simple) web solution that enables a user to maintain a stock portfolio. This portfolio tool should support at least:

1. Showing a list of stocks the portfolio contains, with the following columns:
    * Symbol
    * Name
    * Current price
    * Number of contracts
    * Buy value
    * Current value
    * % yield
2. Use a service to retieve stock prices & names (see below).

For example:

### Portfolio Positions (entries)

| Symbol  | Name      | Price  | #   | Bought     | Current    | Yield      |   |
|---------|-----------|-------:|----:|-----------:|-----------:|-----------:|---|
| ABN.NL  | ABN AMRO  | 22.08  | 10  | 210.00     | 220.80     | +5.12%     | X |
| INGA.NL | ING Group | 12.496 | 10  | 138.21     | 124.96     | -9.59%     | X |
| **Total**                       |||| **348.21** | **334.96** | **-3.81%** |   |

### Adding Stocks

| Add stock                              ||
|----------------------|-----------------:|
| Symbol:              | [\_\_\_\_\_\_\_] |
| Number of contracts: | [\_\_\_\_\_\_\_] |
| Buy price:           | [\_\_\_\_\_\_\_] |
| Buy value:           |             0.00 |
|                      | [ Submit ]       |


## Bonus points

* Ensure a persistence mechanism
* Maintain a single position when the same symbol is added multiple times
* Option to buy/sell a number of shares
* Support multiple currencies and normalize to EUR
* Support multiple accounts / portfolios

## Price data service

For sample market data, you can the file **market-data.json** next to this 
readme. You can use this as a basis for mocking your data services.
