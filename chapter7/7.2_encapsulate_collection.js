class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  // 이 메서드들을 사용하지 않고서는 아무도 목록을 변경할 수 없게 만드는 방식
  get courses() {
    return this._courses.slice();
  }

  set courses(aList) {
    this._courses = aList;
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  // 제거 메서드에서는 원소를 제거할 때 대응 방식을 정해야 한다. 무시하거나 에러를 던질 수도 있다.
  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError();
    }
  ) {
    const index = this._courses.indexOf(aCourse);
    if (index === -1) fnIfAbsent();
    else this._courses.splice(index, 1);
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }
  get name() {
    return this._name;
  }
  get isAdvanced() {
    return this._isAdvanced;
  }
}

const aPerson = new Person('Jon Do');
numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length;

// client1
{
  for (const name of readBasicCourseNames(filename)) {
    aPerson.addCourse(new Course(name, false));
  }
}
