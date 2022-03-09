const record = {
  name: "애크미 보스턴",
  location: "Malden MA",
  customer: {
    name: "애크미 산업",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7,
      // 중략
    },
    // 중략
  },
};

const unknownClient = {
  name: "물류창고 15",
  location: "Malden MA",
  // 더 많은 현장(site) 정보
  customer: "미확인 고객",
};

const site = acquireSiteData();
const aCustomer = site.customer;

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
  const weeksDelinquent =
    aCustomer === "미확인 고객"
      ? 0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
