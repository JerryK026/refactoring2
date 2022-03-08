class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {} // 고객 이름
  get billingPlan() {} // 요금제
  set billingPlan(arg) {}
  get paymentHistory() {} // 납부 이력
}

{
  const site = new Site();

  // client 1
  const aCustomer = site.customer;
  // ...수많은 코드...
  let customerName;
  if (aCustomer === "미확인 고객") customerName = "거주자";
  else customerName = aCustomer.name;

  // client2
  const plan =
    aCustomer === "미확인 고객"
      ? CustomElementRegistry.billingPlans.basic
      : aCustomer.billingPlan;

  // client3
  if (aCustomer !== "미확인 고객") aCustomer.billingPlan = newPlan;

  // client4
  const weeksDelinquent =
    aCustomer === "미확인 고객"
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYer;
}
