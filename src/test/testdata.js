export const fakedata = [
  {
    hotelId: "1",
    hotelName: "Jack Sparrow",
    rate: 5,
    location: "Kingston",
    hotelDesc:
      "This swash-buckling tale follows the quest of Captain Jack Sparrow, a savvy pirate, and Will Turner, a resourceful blacksmith, as they search for Elizabeth Swann. Elizabeth, the daughter of the governor and the love of Will's life, has been kidnapped by the feared Captain Barbossa. Little do they know, but the fierce and clever Barbossa has been cursed. He, along with his large crew, are under an ancient curse, doomed for eternity to neither live, nor die. That is, unless a blood sacrifice is made.",
    mainimg:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    price: [
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
    ]
  }
];
