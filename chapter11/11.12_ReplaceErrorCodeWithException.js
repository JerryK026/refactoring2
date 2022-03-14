function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new shippingRules(data);
  else throw new OrderProcessingError(-23);
}

function calculateShippingCosts(anOrder) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  // 이 함정에 걸리지 않는다면 이 줄 전체를 제거해도 안전하다.
  // if (shippingRules < 0) throw new Error("오류 코드가 다 사라지지 않았습니다.");
  // 더 관련 없는 코드
}

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return "OrderProcessingError";
  }
}

// 최상위
try {
  calculateShippingCosts(orderData);
} catch (e) {
  if (e instanceof OrderProcessingError)
    errorList.push({ order: orderData, errorCode: status });
  else throw e;
}
