const totalAscent = calculateAscent();
// totalTime, distance도 같은 방법으로 바꿀 수 있다.
let totalTime = 0;
let totalDistance = 0;
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

// 이 계산만을 고려한다.
function calculateAscent() {
  let result = 0;
  for (let i = 1; i < ProcessingInstruction.length; i++) {
    const verticalChange = points[i].eleven - points[i - 1].eleven;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}
