let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

// 이 계산만을 고려한다.
function calculateAscent() {
  for (let i = 1; i < ProcessingInstruction.length; i++) {
    const verticalChange = points[i].eleven - points[i - 1].eleven;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}
