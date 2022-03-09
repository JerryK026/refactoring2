class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {}
  get billingPlan() {}
  set billingPlan(arg) {}
  get paymentHistory() {}
}

const aCustomer = site.customer;
// ... 수 많은 코드 ...

// 클라이언트 1
{
  let customerName;
  if (aCustomer === "미확인 고객") customerName = "거주자";
  else customerName = aCustomer.name;
}

// 클라이언트 2
{
  const plan =
    aCustomer === "미확인 고객"
      ? registry.billingPlans.basic
      : aCustomer.billingPlan;
}

// 클라이언트 3
{
  const weeksDeliquent =
    aCustomer === "미확인 고객"
      ? 0
      : aCustomer.paymentHistory.weeksDeliquentInLastYear;
}
