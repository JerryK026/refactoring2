class Employee {
  constructor(name, id, monthlyCost) {
    thid._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    // 월간 비용
    return this._monthlyCost;
  }
  get name() {
    // 이름
    return this._name;
  }
  get id() {
    return this._id;
  }

  get annualCost() {
    // 연간 비용
    return this.monthlyCost * 12;
  }
}

class Department {
  constructor(name, staff) {
    this._name = name;
    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }
  get name() {
    // 이름
    return this._name;
  }

  get totalMonthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCousnt() {
    return this.staff.length;
  }

  get totalAnnualCost() {
    // 총 연간 비용
    return this.totalMonthlyCost * 12;
  }
}
