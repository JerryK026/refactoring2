function totalSalary() {
  // 알고리즘을 교체한 경우
  // return people.reduce((total, p) => total + p.salary, 0);
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }
  return totalSalary;
}

function youngestAge() {
  // 알고리즘을 교체한 경우
  // return Math.min(...people.map(p => p.age));
  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
  }
}

return `최연소 ${youngestAge()}, 총 급여: ${totalSalary()}`;
