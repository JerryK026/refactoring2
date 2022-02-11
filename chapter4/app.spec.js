const { sampleProvinceData, Province } = require("./app");
const { assert, expect } = require("chai");

// 생산 부족분을 제대로 계산하는지 확인하는 테스트
describe("province", function () {
  let asia;
  this.beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall", function () {
    expect(asia.shortfall).equal(5);
  });

  it("profit", function () {
    expect(asia.profit).equal(230);
  });
});
