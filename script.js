const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy"),
  new Book("1984", "George Orwell", "1949", "Dystopian"),
  new Book("To Kill a Mockingbird", "Harper Lee", "1960", "Fiction"),
];

function Book(title, author, year, genre, page) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.page = page;
}


function addBookToLibrary() {

}
