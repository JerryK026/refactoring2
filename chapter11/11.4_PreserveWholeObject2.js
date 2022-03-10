// 호출자
{
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (!aPlan.withinRange(low, high))
    alerts.push("방 온도가 지정 범위를 벗어낫습니다.");
}
