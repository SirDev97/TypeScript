"use strict";
// classes
var Invoice = /** @class */ (function () {
    // readonly client: string; // can read it outside and inside the class but cannot change
    // private details: string; // only read and change inside the class
    // public amount: number; // default: can change and read both inside and out of the class
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        // inv.client = "something"; ---> READONLY
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on mario kart", 250);
var invTwo = new Invoice("luigi", "work on luigis mansion", 300);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(function (inv) {
    // inv.client = "something"; ---> READONLY
    console.log(inv.client, inv.amount, inv.format());
});
//forms
var form = document.querySelector(".new-item-form");
//inputs
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
