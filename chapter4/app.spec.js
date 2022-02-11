const { sampleProvinceData, Province } = require("./app");
const { assert, expect } = require("chai");

// 생산 부족분을 제대로 계산하는지 확인하는 테스트
describe("province", function () {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    // assert.equal(asia.shortfall, 5);
    expect(asia.shortfall).equal(5);
  });
});
