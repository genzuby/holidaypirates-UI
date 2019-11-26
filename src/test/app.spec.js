const { getHotels, getCurrnentPrice } = require("../scripts/");
const fakedata = require("./testdata");

describe("Hotel List Component test", () => {
  describe("getHotels function for get data from server", () => {
    it("Should get every data from server", () => {
      expect(getHotels()).toBe(11);
    });
  });

  descibe("get current month price", () => {
    it("Should get the first items' current month value", () => {
      const dataset = fakedata;
      expect(getCurrnentPrice(dataset[0].price)).toBe(300);
    });
  });
});
