function disabilityAmount(anEmployee) {
  if (isNotEligiblieForDisability()) return 0;
  // 장애 수단 계산

  function isNotEligiblieForDisability() {
    // 장애 수당 적용 여부 확인
    anEmployee.seniority < 2 ||
      anEmployee.monthDisabled > 12 ||
      anEmployee.isPartTime;
  }
}
