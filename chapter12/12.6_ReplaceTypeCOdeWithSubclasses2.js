class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg))
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }

  get typeString() {
    return this._type;
  }

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }

  static createEmployeeType(aString) {
    switch (type) {
      case "engineer":
        return new Engineer();
      case "salesperson":
        return new Salesperson();
      case "manager":
        return new Manager();
      default:
        throw new Error(`${aString}라는 직원 유형은 없습니다.`);
    }
  }

  get capitalizedType() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.substr(1).toLowerCase()
    );
  }

  toString() {
    return `${this._name} (${this.type.capitalizedName})`;
  }
}

// 제거해도 되지만 다양한 서브클래스 사이의 관계를 명확히 알려주는 클래스라면 그냥 두는 편이다.
// 다른 기능을 옮겨놓기에 편리한 장소이기도 하다.
class EmployeeType {
  constructor(aString) {
    this._value = aString;
  }

  toString() {
    return this._value;
  }

  get capitalizedName() {
    return (
      this.toString().charAt(0).toUpperCase() +
      this.toString().substr(1).toLowerCase()
    );
  }
}
