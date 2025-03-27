const myLibrary = [
  new Book("The Hobbit", "J.R.R. Tolkien", "1937", "Fantasy"),
  new Book("1984", "George Orwell", "1949", "Dystopian"),
  new Book("To Kill a Mockingbird", "Harper Lee", "1960", "Fiction"),
  new Book("Pride and Prejudice", "Jane Austen", "1813", "Romance"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "1925", "Tragedy"),
  new Book("Moby-Dick", "Herman Melville", "1851", "Adventure"),
];

function Book(title, author, year, genre, page) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor.");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.year = year;
  this.genre = genre;
  this.page = page;
  this.read = false;
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

//Dialog
const openButton = document.querySelector(".add-book-btn");
const dialog = document.querySelector("dialog");

openButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

// Render Book Cards
const renderBooks = () => {
  const cards = document.querySelector(".book-cards");
  cards.innerHTML = "";

  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    card.classList.add("book-card");
    card.setAttribute("data-id", book.id);

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

    const read = document.createElement("p");
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    card.appendChild(read);

    const readButton = document.createElement("button");
    readButton.textContent = "Toggle Read";
    readButton.classList.add("btn-read");
    readButton.addEventListener("click", () => {
      book.toggleReadStatus();
      read.textContent = `Read: ${book.read ? "Yes" : "No"}`;
    });
    card.appendChild(readButton);

    const removeButton = document.createElement("button");
    removeButton.textContent = "X";
    removeButton.classList.add("btn-remove");
    removeButton.setAttribute("data-id", book.id);
    removeButton.addEventListener("click", (e) => {
      const bookId = e.target.getAttribute("data-id");
      const bookIndex = myLibrary.findIndex((b) => b.id === bookId);
      if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
      }
      renderBooks();
    });
    card.appendChild(removeButton);

    cards.appendChild(card);
  });
};

renderBooks();

// Add Book Form Submission
const form = document.querySelector(".book-form");
const submitButton = document.querySelector("#submit-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  const title = form.querySelector("#title").value;
  const author = form.querySelector("#author").value;
  const year = form.querySelector("#year").value;
  const genre = form.querySelector("#genre").value;
  const page = form.querySelector("#page").value;

  if (title && author && year && genre) {
    const newBook = new Book(title, author, year, genre, page);
    myLibrary.push(newBook);
    renderBooks();
  }
});
