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

const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;

function enrichSite(aSite) {
  const result = _.cloneDeep(aSite);
  const UnknownCustomer = {
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: {
      weeksDelinquentInLastYear: 0,
    },
  };

  if (isUnknown(result.customer)) result.customer = UnknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

function isUnknown(aCustomer) {
  if (aCustomer === "미확인 고객") return true;
  else return aCustomer.isUnknown;
}

// 클라이언트 1
{
  const customerName = aCustomer.name;
  // ... 수많은 코드 ...
}

// 클라이언트 2
{
  const plan = aCustomer.billingPlan;
}

// 클라이언트 3
{
  const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
}
