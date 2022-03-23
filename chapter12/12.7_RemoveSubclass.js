class Person {
  constructor(name) {
    this._name = name;
    this._genderCode = genderCode;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return this._genderCode;
  }

  get isMale() {
    return "M" === this._genderCode;
  }

  get isFemale() {
    return "F" === this._genderCode;
  }
}

class Male extends Person {
  get genderCode() {
    return "M";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

function createPerson(name) {
  return new Person(name);
}

function createFromInput(aRecord) {
  switch (aRecord.gender) {
    case "M":
      return new Person(aRecord.name, "M");
    case "F":
      return new Person(aRecord.name, "F");
    default:
      return new Person(aRecord.name, "X");
  }
}

function loadFromInput(data) {
  return data.map((aRecord) => createPerson(aRecord));
}

// 클라이언트
{
  const numberOfMales = people.filter((p) => p.isMale).length;
}
