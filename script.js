class users {
  firstName;
  lastName;
  city;
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowBooks = [];
  }
  borrow(bookIborrow) {
    this.borrowBooks.push(bookIborrow);
    alert("You borrowing book name ${bookIborrw.name}.");
  }
}
