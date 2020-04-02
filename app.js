let myLibrary = [];

let books = [
	{
		title: 'How to win friends and influence people',
		author: 'dale carnegie',
		pages: 450,
		cover: 'img',
		isRead: false
	},
	{
		title: 'Unlimited Power',
		author: 'Tony Robbins',
		pages: 600,
		cover: 'img',
		isRead: true
	}
];

// console.log(books[0].title);

function Book(title, author, pages, cover, isRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.cover = cover;
	this.isRead = isRead;
	this.info = function() {
		return `${title} by ${author}, ${pages} pages, ${cover}`;
	};
}

const book = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const book2 = new Book('The Profit', 'John Grisham', 400, 'not read yet');
console.log(book.info());

let h1 = document.createElement('h1');
let addItem = document.querySelector('.library');
// h1.textContent = printbooks()[0];
h1.textContent = book.info();
h1.textContent += book2.info();
// h1.setAttribute('class', 'library');
addItem.appendChild(h1);
console.log(printBooks());
// console.log(books);
function printBooks() {
	return books.map((item) => item.title);
}

// console.log(book);

// h1.textContent = book.title;
// h1.setAttribute('class', 'library');
// document.body.appendChild(h1);
