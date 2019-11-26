const { getCurrnentPrice, getHotels, renderStar } = require("../scripts");

test("Should get every data from server", async () => {
  const data = await getHotels();
  expect(data.status).toBe(200);
});

test("Should get the first items' current month value", () => {
  const price = [
    {
      season: "regular",
      month: [3, 4, 5, 6, 9, 10, 11],
      seasonPirce: 300
    },
    {
      season: "super",
      month: [1, 7, 8, 12],
      seasonPirce: 600
    },
    {
      season: "expensive",
      month: [2],
      seasonPirce: 480
    }
  ];
  expect(getCurrnentPrice(price)).toBe(300);
});

test("Should show correct star rating info", () => {
  const result =
    '<div class="star-rating"><i class="fas fa-star 3x"></i><i class="fas fa-star 3x"></i><i class="fas fa-star-half-alt 3x"></i><i class="far fa-star 3x"></i><i class="far fa-star 3x"></i></div>';
  expect(renderStar(2.5)).toBe(result);
});
