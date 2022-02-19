const _ = require("lodash");

reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

// client1
{
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const baseCharge = aReading.baseCharge;
}

// client2
{
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const taxableCharge = aReading.taxableCharge;
}

// client3
{
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  const basicChargeAmount = aReading.baseCharge;
}

function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity;
}

// enrich : 본질은 같고 부가 정보만 덧붙이는 변환 함수
// transform : 형태가 변할 때
export function enrichReading(original) {
  // _ : lodash
  const result = _.cloneDeep(original);
  result.baseCharge = calculateBaseCharge(result);
  result.taxableCharge = Math.max(
    aReading.baseCharge - taxThreshold(aReading.year)
  );
  return result;
}
