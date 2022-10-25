const submitBtn = document.querySelector(".submit-book");
const newBook = document.querySelector(".new-book");
let addBook = document.querySelector(".submit-book");
let id = 0;
let myLibrary = [];

function Book(title, author, genre, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
}

function displayLibrary() {
    myLibrary.forEach((book) => {
        console.log(book)
    })
}

function addBookToLibrary(data) {
myLibrary.push(data);
}

newBook.addEventListener("click", showForm)
function showForm() {
    let formDiv = document.querySelector(".form-div");
    formDiv.classList.toggle("hide");
}


function makeBook() {
    let books = document.getElementById("books");

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let pages = document.getElementById("pages").value;

    myLibrary[id] = new Book(title, author, genre, pages);
    id++

        let card = `<div class='card'>
                        <div class='x-div'>
                            <p class='del' onclick='deleteBook()'>X</p> 
                        </div>
                            <p>${title}</p>
                            <p>${author}</p>
                            <p>${genre}</p>
                            <p>${pages}</p>
                    </div>`
                        books.innerHTML += card;
}

function deleteBook() {
    book = event.target.parentElement.parentElement;

    book.classList.add('hide-book')
    let hiddenBook = myLibrary.splice(book, 1);
}


addBook.addEventListener("click", makeBook)


