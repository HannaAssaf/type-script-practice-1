type Currency = "USD" | "EUR" | "GBP";

interface ConvertCurrencyParams {
  amount: number;
  currency: Currency;
}
function convertCurrency({ amount, currency }: ConvertCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 200, currency: "USD" });
