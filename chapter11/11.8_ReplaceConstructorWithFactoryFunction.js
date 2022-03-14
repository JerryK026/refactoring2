class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {
    return this._name;
  }
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return { E: "Engineer", M: "Manager", S: "SalePerson" };
  }
}

// 팩터리 본문은 단순히 생성자에 위임한다.
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}

function createEngineer(name) {
  return new Employee(name, "E");
}

// 호출자
const candidate = createEmployee(document.name, document.empType);

const leadEngineer = createEngineer(document.leadEngineer);
