class HeatingPlan {
  get targetTemperature() {
    if (thermoastat.selectedTemparature > this._max) return this._max;
    else if (thermoastat.selectedTemparature < this._min) return this._min;
    else return thermoastat.selectedTemparature;
  }
}

// 호출자
{
  if (thePlan.targetTemperature > thermoastat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermoastat.currentTemperature)
    setToCool();
  else setOff();
}
