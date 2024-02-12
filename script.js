const books = [];

function Book(author,title,pages,read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const authorName = document.querySelector("#author");
const bookTitle = document.querySelector("#title");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
const submitButton = document.querySelector("#confirmBtn");

const addButton = document.querySelector(".addBooks");
const dialog = document.querySelector("dialog");
addButton.addEventListener(("click"),() =>{
    dialog.showModal();
})

submitButton.addEventListener(("click"),(e) => {
    e.preventDefault();
    dialog.close();
    const book = new Book(authorName.value,bookTitle.value,pages.value,read.value);
    books.push(book);
    displayChild(authorName.value,bookTitle.value,pages.value,read.value);
})

function displayChild(){
    const template = document.querySelector("template").content.cloneNode(true);
    const section = document.querySelector("section");
    section.appendChild(template);
    const description = document.querySelectorAll("p");
    const bookAdded = books[books.length - 1];
    description[0].textContent = `${bookAdded.author}`;
}








