// 생략 (중요하지 않은 코드)
checkForMiscreants(people);

function checkForMiscreants(people) {
  if (people.some((p) => ["조커", "사루만"].includes(d))) sendAlert();
  // js도 이런 집합 연산을 지원해줬으면 좋겠다!
  // ["조커", "사루만"].isDisjointWith(people)
}
