const books = [];

function Book(author,title,pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
}

const addButton = document.querySelector(".addBooks");
const dialog = document.querySelector("dialog");
addButton.addEventListener(("click"),() =>{
    dialog.showModal();
})

const submitButton = document.querySelector("#confirmBtn");

submitButton.addEventListener(("click"),(e) => {
    e.preventDefault();
    dialog.close();
    appendBook();
})

function appendBook(){
    const authorName = document.querySelector("#author");
    const bookTitle = document.querySelector("#title");
    const pages = document.querySelector("#pages");
    const book = new Book(authorName.value,bookTitle.value,pages.value);
    books.push(book);
    displayChild(authorName.value,bookTitle.value,pages.value);
}






