class users {
  firstName;
  lastName;
  city;
  borrowBooks;
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }
  borrow() {
    this.borrowBooks.push(this.borrowBooks);
    alert("You borrowing book name ${this.borrowBooks.name}.");
  }
}
