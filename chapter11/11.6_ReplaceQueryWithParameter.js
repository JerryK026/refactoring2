class HeatingPlan {
  get targetTemperature() {
    return this.targetTemperature(thermoastat.selectedTemparature);
  }

  targetTemperature(selectedTemparature) {
    if (selectedTemparature > this._max) return this._max;
    else if (selectedTemparature < this._min) return this._min;
    else return selectedTemparature;
  }
}

// 호출자
{
  if (
    thePlan.xxNEWtargetTemperature(thermoastat.selectedTemparature) >
    thermoastat.currentTemperature
  )
    setToHeat();
  else if (
    thePlan.xxNEWtargetTemperature(thermoastat.selectedTemparature) <
    thermoastat.currentTemperature
  )
    setToCool();
  else setOff();
}
