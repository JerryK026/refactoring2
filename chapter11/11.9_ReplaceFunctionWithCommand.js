function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  // execute에는 매개변수를 받지 않도록 하자.
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalEcam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    // 모든 지역 변수를 필드로 바꾼다.
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    this.scoreSmoking();
    this._certificationGrade = "regular";
    if (
      tihs._scoringGuide.stateWithLowCertification(this._candidate.originState)
    ) {
      this._certificationGrade = "low";
      this._result -= 5;
    }
    // 비슷한 코드가 한참 이어짐
    this._result -= Math.max(this._healthLevel - 5, 0);
    return this._result;
  }

  scoreSmoking() {
    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true;
    }
  }
}
