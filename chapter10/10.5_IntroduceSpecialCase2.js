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

  get isUnknown() {
    return false;
  }

  get customer() {
    return this._customer === "미확인 고객"
      ? createUnknownCustomer()
      : this._customer;
  }
}

function createUnknownCustomer() {
  return {
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDeliquentInLastYear: 0,
    },
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

const aCustomer = site.customer;
// ... 수 많은 코드 ...

// 클라이언트 1
{
  let customerName = aCustomer.name;
}

// 클라이언트 2
{
  const plan = aCustomer.billingPlan;
}

// 클라이언트 3
{
  const weeksDeliquent = aCustomer.paymentHistory.weeksDeliquentInLastYear;
}
