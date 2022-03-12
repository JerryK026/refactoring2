class Person {
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get id() {
    return this._id;
  }
  set id(arg) {
    return (this._id = arg);
  }
}

const martin = new Person();
martin.name = "마틴";
martin.id = "1234";
