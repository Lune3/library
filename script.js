const books = [];
const booksNodes = [];
let counter = 1;

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
const section = document.querySelector("section");


addButton.addEventListener(("click"),() =>{
    dialog.showModal();
})


submitButton.addEventListener(("click"),(e) => {
    e.preventDefault();
    if(read.checked){
        const book = new Book(authorName.value,bookTitle.value,pages.value,1);
        books.push(book);
    }
    else{
        const book = new Book(authorName.value,bookTitle.value,pages.value,0);
        books.push(book);
    }
    document.querySelector("form").checkValidity();
    if(document.querySelector("form").reportValidity()){
        displayChild();
        dialog.close();
    }
})

function displayChild(){
    const bookAdded = books[books.length - 1];
    const template = document.querySelector("template").content.cloneNode(true);
    const newBook = document.createElement("div");
    newBook.className = `b${counter}`;
    section.appendChild(newBook);
    newBook.appendChild(template);
    const bookDescription = newBook.querySelectorAll(`p`);
    let updater = 0;
    for (const key in bookAdded) {
        if(key === "read"){
            if(bookAdded[key]){
                bookDescription[updater].textContent = "read";
            }
            else{
                bookDescription[updater].textContent = "Not read"
            }
        }
        else{
        bookDescription[updater].textContent = bookAdded[key];
        }
        updater++;
    }
    counter++;
}

section.addEventListener(("click") , () => {
    if(books.length > 0){
        const svg = document.querySelectorAll("svg");
        svg.forEach(del => {
            del.addEventListener(("click"), (e) => {
                const bookToBeDel = e.target.parentNode.parentNode;
                bookToBeDel.remove();
            })
        });
    }
})






