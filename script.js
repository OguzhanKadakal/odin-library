const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy"),
  new Book("1984", "George Orwell", "1949", "Dystopian"),
  new Book("To Kill a Mockingbird", "Harper Lee", "1960", "Fiction"),
  new Book("Pride and Prejudice", "Jane Austen", "1813", "Romance"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "1925", "Tragedy"),
  new Book("Moby-Dick", "Herman Melville", "1851", "Adventure"),
];

function Book(title, author, year, genre, page) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.page = page;
}

function addBookToLibrary() {}
