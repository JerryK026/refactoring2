class Site {
  get customer() {
    return isUnknown(this._customer === "미확인 고객")
      ? new UnknownCustomer()
      : this._customer;
  }
}

class Customer {
  get name() {} // 고객 이름
  get billingPlan() {} // 요금제
  set billingPlan(arg) {}
  get paymentHistory() {} // 납부 이력

  get isUnknown() {
    return false;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }

  get name() {
    return "거주자";
  }

  get billingPlan() {
    return registry.billingPlas.basic;
  }

  set billingPlan(arg) {
    /* 무시한다 */
  }

  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYer() {
    return 0;
  }
}

function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교 <${arg}>`);
  return arg.isUnknown;
}

const site = new Site();

const aCustomer = site.customer;
// ...수많은 코드...

// client 1
{
  let customerName = aCustomer.name;
}

// client2
{
  const plan = aCustomer.billingPlan;
}

// client3
{
  aCustomer.billingPlan = newPlan;
}

// client4
{
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYer;
}

// 튀는 클라이언트
{
  const name = aCustomer.isUnknown ? "미확인 거주자" : aCustomer.name;
}
