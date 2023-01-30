export const Data = [
  {
    name: "John Smith",
    cardInfo: {
      cardType: "VISA",
      cardNumber: 4485076160182107,
      month: "02",
      year: "2025",
      cvv: 631,
      transactions: [
        { price: "5", transaction: "starbucks", negative: true },
        { price: "1,000", transaction: "paycheck", negative: false },
        { price: "125", transaction: "red sox tickets", negative: true },
      ],
    },
  },
  {
    name: "Tim Grossman",
    cardInfo: {
      cardType: "MASTERCARD",
      cardNumber: 5203906260947058,
      month: "04",
      year: "2028",
      cvv: 183,
      transactions: [
        { price : "7.50", transaction: "walgreens", negative: true },
        { price: "1,800", transaction: "rent", negative: true},
        { price: "85", transaction: "karate lessons", negative : true},
      ],
    },
  },
  {
    name: "Michael Peters",
    cardInfo: {
      cardType: "DISCOVER",
      cardNumber: 6011830616693515,
      month: "07",
      year: "2026",
      cvv: 410,
      transactions: [
        { price : "350", transaction : "car payment", negative: true},
        { price : "120", transaction : "birthday gift", negative: false},
        { price : "180", transaction : "plumber fees", negative: true}
      ],
    },
  },
];
