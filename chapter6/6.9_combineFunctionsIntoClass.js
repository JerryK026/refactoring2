reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

// client1
{
  const aReading = acquireReading();
  const baseCharge =
    baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// client2
{
  const aReading = acquireReading();
  const baseCharge = calculateBaseCharge(aReading);

  function calculateBaseCharge(aReading) {
    baseRate(aReading.month, aReading.year) * aReading.quantity;
  }
}
