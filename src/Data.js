export const Data = {
  currentUser: "John",
  currentCard: 0,
  John: {
    name: "John Johnson",
    cards: [
      {
        cardType: "VISA",
        cardNumber: "4485076160182107",
        month: "02",
        year: "2025",
        cvv: 631,
        balance: `24,000`,
        transactions: [
          { price: "5", transaction: "starbucks", negative: true },
          { price: "1,000", transaction: "paycheck", negative: false },
          { price: "125", transaction: "red sox tickets", negative: true },
        ],
      },
      {
        cardType: "MASTERCARD",
        cardNumber: "5203906260947058",
        month: "04",
        year: "2028",
        cvv: 183,
        balance : `12,500`,
        transactions: [
          { price: "7.50", transaction: "walgreens", negative: true },
          { price: "1,800", transaction: "rent", negative: true },
          { price: "85", transaction: "karate lessons", negative: true },
        ],
      },
      {
        cardType: "DISCOVER",
        cardNumber: "6011830616693515",
        month: "07",
        year: "2026",
        cvv: 410,
        balance : `8,750`,
        transactions: [
          { price: "350", transaction: "car payment", negative: true },
          { price: "120", transaction: "birthday gift", negative: false },
          { price: "180", transaction: "plumber fees", negative: true },
        ],
      },
    ],
  },

  Tyler: {
    name: "Tyler Johnson",
    cards: [
      {
        cardType: "AMEX",
        cardNumber: "348426549087847",
        month: "05",
        year: "2023",
        cvv: 268,
        balance: `2,500`,
        transactions: [
          { price: "12", transaction: "pizza", negative: true },
          { price: "1,400", transaction: "paycheck", negative: false },
          { price: "80", transaction: "broadway tickets", negative: true },
        ],
      },
      {
        cardType: "UNIONPAY",
        cardNumber: "6222026073857579",
        month: "08",
        year: "2027",
        cvv: 732,
        balance: `3,800`,
        transactions: [
          { price: "40", transaction: "gas", negative: true },
          { price: "30", transaction: "chinese food", negative: true },
          { price: "100", transaction: "winter jacket", negative: true },
        ],
      },
      {
        cardType: "VISA",
        cardNumber: "4485446741380498",
        month: "06",
        year: "2024",
        cvv: 143,
        balance: `4,200`,
        transactions: [
          { price: "120", transaction: "electric bill", negative: true },
          { price: "120", transaction: "wedding present", negative: false },
          { price: "1,100", transaction: "new windows", negative: true },
        ],
      },
    ],
  },

  Jake: {
    name: "Steve Wright",
    cards: [
      {
        cardType: "DINERS",
        cardNumber: "3898422938975658",
        month: "07",
        year: "2026",
        cvv: 437,
        balance: `500`,
        transactions: [
          { price: "10", transaction: "coffee and donut", negative: true },
          { price: "2,000", transaction: "rent payments", negative: false },
          { price: "40", transaction: "ice skating", negative: true },
        ],
      },
      {
        cardType: "AMEX",
        cardNumber: "343371115714694",
        month: "09",
        year: "2029",
        cvv: 108,
        balance: `5,100`,
        transactions: [
          { price: "2", transaction: "711 slurpee", negative: true },
          { price: "60", transaction: "new shirts", negative: true },
          { price: "50", transaction: "new sneakers", negative: true },
        ],
      },
      {
        cardType: "VISA",
        cardNumber: "4408345140263509",
        month: "07",
        year: "2026",
        cvv: 700,
        balance: `2,650`,
        transactions: [
          { price: "160", transaction: "dentist appointment", negative: true },
          { price: "15", transaction: "new backpack", negative: true },
          { price: "300", transaction: "graduation gift", negative: false },
        ],
      },
    ],
  },
};
