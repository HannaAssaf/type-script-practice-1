interface ConvertCurrencyParams {
  amount: number;
  currency: "USD" | "EUR" | "GBP";
}

function convertCurrency({ amount, currency }: ConvertCurrencyParams): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 200, currency: "USD" });
