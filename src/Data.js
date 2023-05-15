export const Data = {
  currentUser: "John",
  currentCard: 0,
  cardIndex: 0,
  John: {
    name: "John Johnson",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    cards: [
      {
        cardType: "VISA",
        cardNumber: "4485076160182107",
        month: "02",
        year: "2025",
        cvv: 631,
        balance: `24,000`,
        transactions: [
          { price: "-5", transaction: "Starbucks", negative: true },
          { price: "1,000", transaction: "Paycheck", negative: false },
          { price: "-125", transaction: "Red Sox Tickets", negative: true },
        ],
      },
      {
        cardType: "MASTERCARD",
        cardNumber: "5203906260947058",
        month: "04",
        year: "2028",
        cvv: 183,
        balance: `12,500`,
        transactions: [
          { price: "-7.50", transaction: "Walgreens", negative: true },
          { price: "-1,800", transaction: "Rent", negative: true },
          { price: "-85", transaction: "Karate Lessons", negative: true },
        ],
      },
      {
        cardType: "DISCOVER",
        cardNumber: "6011830616693515",
        month: "07",
        year: "2026",
        cvv: 410,
        balance: `8,750`,
        transactions: [
          { price: "-350", transaction: "Car Payment", negative: true },
          { price: "120", transaction: "Birthday Gift", negative: false },
          { price: "-180", transaction: "Plumber Fees", negative: true },
        ],
      },
    ],
    goals: [
      { goal: "Make a Savings Account", completed: false },
      { goal: "Save Money for a Diamond Ring", completed: false },
      { goal: "Pay Off College Debt", completed: false },
    ],
  },

  Tyler: {
    name: "Tyler Johnson",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    cards: [
      {
        cardType: "AMEX",
        cardNumber: "348426549087847",
        month: "05",
        year: "2023",
        cvv: 268,
        balance: `2,500`,
        transactions: [
          { price: "-12", transaction: "Pizza", negative: true },
          { price: "1,400", transaction: "Paycheck", negative: false },
          { price: "-80", transaction: "Broadway Tickets", negative: true },
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
          { price: "-40", transaction: "Gas", negative: true },
          { price: "-30", transaction: "Chinese Food", negative: true },
          { price: "-100", transaction: "Winter Jacket", negative: true },
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
          { price: "-120", transaction: "Electric Bill", negative: true },
          { price: "120", transaction: "Wedding Present", negative: false },
          { price: "-1,100", transaction: "New Windows", negative: true },
        ],
      },
    ],
    goals: [
      { goal: "Increase Salary by 10%", completed: false },
      { goal: "Buy a New Car", completed: false },
      { goal: "Set Aside Money for Kids College Fund", completed: false },
    ],
  },

  Jake: {
    name: "Steve Wright",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    cards: [
      {
        cardType: "DINERS",
        cardNumber: "3898422938975658",
        month: "07",
        year: "2026",
        cvv: 437,
        balance: `500`,
        transactions: [
          { price: "-10", transaction: "Coffee and Donut", negative: true },
          { price: "2,000", transaction: "Rent Payments", negative: false },
          { price: "-40", transaction: "Ice Skating", negative: true },
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
          { price: "-2", transaction: "711 Slurpee", negative: true },
          { price: "-60", transaction: "New Shirts", negative: true },
          { price: "-50", transaction: "New Sneakers", negative: true },
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
          { price: "-160", transaction: "Dentist Appointment", negative: true },
          { price: "-15", transaction: "New Backpack", negative: true },
          { price: "-300", transaction: "Graduation Gift", negative: false },
        ],
      },
    ],
    goals: [
      { goal: "Buy a New Phone", completed: false },
      { goal: "Save for House Down Payment", completed: false },
      { goal: "Get Another Source of Income", completed: false },
    ],
  },
};
