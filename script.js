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
  borrowingBook() {
    this.borrowBooks.push(borrowableBook);
    alert("You borrowing book name {borrowableBook.name}.");
  }
}
