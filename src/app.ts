// classes
class Invoice {
  // readonly client: string; // can read it outside and inside the class but cannot change
  // private details: string; // only read and change inside the class
  // public amount: number; // default: can change and read both inside and out of the class

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    // inv.client = "something"; ---> READONLY
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "work on mario kart", 250);
const invTwo = new Invoice("luigi", "work on luigis mansion", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  // inv.client = "something"; ---> READONLY
  console.log(inv.client, inv.amount, inv.format());
});

//forms
const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
