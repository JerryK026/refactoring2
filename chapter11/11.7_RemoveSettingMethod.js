class Person {
  constructor(id) {
    this.id = id;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get id() {
    return this._id;
  }
}

const martin = new Person("1234");
martin.name = "마틴";
