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
  }
}

let user1 = new users(`hila`, `faingold`, `Qiryat_shemona`);
let user2 = new users(`lior`, `faingold`, `Lod`);
let user3 = new users(`shiran`, `faingold`, `Tel_aviv`);

user1.borrowingBooks("book1");
user1.borrowingBooks("book2");
user1.borrowingBooks("book3");
user2.borrowingBooks("book22");
user2.borrowingBooks("book33");
user3.borrowingBooks("book222");
user3.borrowingBooks("book333");

class BookReport {
  constructor(name) {
    this.name = name;
    this.allUsers = [];
  }
  addNewUser(user) {
    this.allUsers.push(user);
  }
  printReport() {
    this.allUsers.forEach((element) => {
      console.log(
        element.firstName +
          "  " +
          element.lastName +
          " " +
          element.borrowingBook +
          " " +
          element.city +
          " " +
          "toke this book"
      );
    });
  }
}

let a = new BookReport("report1");
a.addNewUser(user1);
a.addNewUser(user2);
a.addNewUser(user3);

console.log(a);
a.printReport();

//********************************************** תשובה מהתגבור של הקבוצה *********************/

// class Users {
//   constructor(name, lastName, city) {
//     this.name = name;
//     this.lastName = lastName;
//     this.city = city;
//     this.borrowedBook = [];
//   }
//   borrowedBooks(namebook) {
//     this.borrowedBook.push(namebook);
//   }
// }
// let user1 = new users(`hila`, `faingold`, `Qiryat_shemona`);
// let user2 = new users(`lior`, `faingold`, `Lod`);
// let user3 = new users(`shiran`, `faingold`, `Tel_aviv`);

// user1.borrowedBooks("Book1");
// user1.borrowedBooks("Book2");
// user1.borrowedBooks("Book3");
// user1.borrowedBooks("Book4");
// user2.borrowedBooks("Book3");
// user2.borrowedBooks("Book1");
// user3.borrowedBooks("Book2");

// class BookReport {
//   constructor(name) {
//     this.name = name;
//     this.allUsers = [];
//   }
//   addNewUser(user) {
//     this.allUsers.push(user);
//   }
//   printReport() {
//     this.allUsers.forEach((element) => {
//       console.log(
//         element.name +
//           " " +
//           element.lastName +
//           " from " +
//           element.city +
//           " borrows this books: " +
//           element.borrowedBook
//       );
//     });
//   }
// }
// let a = new BookReport("report1");

// a.addNewUser(user1);
// a.addNewUser(user2);
// a.addNewUser(user3);
// console.log(a);
// a.printReport();
