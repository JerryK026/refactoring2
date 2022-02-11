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

  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    expect(asia.profit).equal(292);
  });

  it("zero demand", function () {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it("negative demand", function () {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });

  it("empty string demand", function () {
    asia.demand = "";
    expect(asia.shortfall).NaN;
    expect(asia.profit).NaN;
  });
});

describe("no producers", function () {
  // 생산자가 없다.
  let noProducers;
  this.beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });
  it("shortfall", function () {
    expect(noProducers.shortfall).equal(30);
  });
  it("profit", function () {
    expect(noProducers.profit).equal(0);
  });
});

// 이런 코드는 작성하지 않는게 좋다. 겉보기 동작에 영향을 주기 때문이다.
/*
describe("string for producers", function () {
  it("", function () {
    const data = {
      name: "String producers",
      producers: "",
      demand: 30,
      prce: 20,
    };
    const prov = new Province(data);
    expect(prov.shortfall).equal(0);
  });
});
*/
