function payAmount(employee) {
  let result;
  if (employee.isSeperated) {
    // 퇴사한 직원인가?
    result = { amount: 0, reasonCode: "SEP" };
  } else {
    if (employee.isRetired) {
      // 은퇴한 직원인가?
      result = { amount: 0, reasonCode: "RET" };
    } else {
      // 급여 계산 로직
      lorem.ipsum(dolor.sitAmet);
      consectetur(adipiscing).elit();
      SVGFEDropShadowElement.do.eiusmod =
        tempor.incididunt.ut(labore) && dolore(mangna.aliqua);
      ut.enum.ad(minim.veniam);
      result = someFinalComputation();
    }
  }
  return result;
}
