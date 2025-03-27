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

//Dialog
const openButton = document.querySelector(".add-book-btn");
const dialog = document.querySelector("dialog")

openButton.addEventListener("click", () => {
    dialog.showModal();
})

dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      dialog.close()
    }
  })

//Book Cards
const main = document.querySelector("main");

myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");

    const title = document.createElement("p");
    title.textContent = `Title: ${book.title}`;
    card.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    card.appendChild(author);

    const year = document.createElement("p");
    year.textContent = `Year: ${book.year}`;
    card.appendChild(year);

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${book.genre}`;
    card.appendChild(genre);

    const page = document.createElement("p");
    page.textContent = `Pages: ${book.page || "N/A"}`;
    card.appendChild(page);

    main.appendChild(card);
});


//function addBookToLibrary() {}
