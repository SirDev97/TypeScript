"use strict";
// classes
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "work on mario kart", 250);
var invTwo = new Invoice("luigi", "work on luigi mansion", 300);
var invoices = [];
// invoices.push("test");
// invoices.push({ name: "yoshi" });
invoices.push(invOne);
invoices.push(invTwo);
// console.log(invOne);
// invOne.client = "yoshi";
// invOne.amount = 200;
// console.log(invOne);
console.log(invoices);
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
