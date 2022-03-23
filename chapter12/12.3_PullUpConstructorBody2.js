class Employee {
  constructor(name) {}
  get isPrivileged() {}
  assignCar() {}
  finishConstruction() {
    if (this.isPrivileged) this.assignCar();
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    this.finishConstruction();
  }

  get isPrivileged() {
    return this._grade > 4;
  }
}
