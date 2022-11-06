class users {
  firstName;
  lastName;
  city;
  constructor(firstName, lastName, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.borrowingBook = [];
  }
  borrowingBooks(namebook) {
    this.borrowingBook.push(namebook);
    alert("You borrowing book name {borrowingBook.name}.");
  }
}
