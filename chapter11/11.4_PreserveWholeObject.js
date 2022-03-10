// 호출자
{
  if (!aPlan.xxNewWithinRange(aRoom.daysTempRange))
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");
}

class HeatingPlan {
  xxNEWWithinRange(aNumberRange) {
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.hi <= this._temperatureRange.high
    );
  }
}
