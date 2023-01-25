const bookForm = document.querySelector('#book-form')
const submitBtn = document.querySelector(".submit-book");
const newBook = document.querySelector(".new-book");
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
    let read = document.getElementById("read").checked;
    console.log(read)

    myLibrary[id] = new Book(title, author, genre, pages);
    id++

    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let xDiv = document.createElement("div");
    xDiv.setAttribute("class", "x-div");

    let pDelete = document.createElement("P");
    pDelete.setAttribute("class", "del");
    pDelete.innerText = "X"
    pDelete.onclick = function() {deleteBook()}

    let labelCheckDiv = document.createElement("div");
    labelCheckDiv.setAttribute("class", "read-div");

    let titleP = document.createElement("p");
    titleP.textContent = title;
    let authorP = document.createElement("p");
    authorP.textContent = author;
    let genreP = document.createElement("p");
    genreP.textContent = genre;
    let pagesP = document.createElement("p");
    pagesP.textContent = pages;
    let readLabel = document.createElement("label");
    readLabel.innerText = "Read: "
    let readCheckBox = document.createElement("input");
    readCheckBox.setAttribute("type", "checkbox")
    read ? readCheckBox.setAttribute("checked", "") : ""

    card.append(xDiv);
    xDiv.append(pDelete);
    card.append(titleP);
    card.append(authorP);
    card.append(genreP);
    card.append(pagesP);
    labelCheckDiv.append(readLabel);
    labelCheckDiv.append(readCheckBox);
    card.append(labelCheckDiv);
    books.append(card)

}

    function deleteBook() {
    book = event.target.parentElement.parentElement;

    book.classList.add('hide-book')
    let hiddenBook = myLibrary.splice(book, 1);
}



bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    makeBook()
})

