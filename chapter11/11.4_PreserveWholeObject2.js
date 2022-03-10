// 호출자
{
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = aPlan.xxNEWWithinRange(aPlan, tempRange);
  if (!isWithinRange) alerts.push("방 온도가 지정 범위를 벗어낫습니다.");
}

class HeatingPlan {
  xxNEWWithinRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
  }
}
