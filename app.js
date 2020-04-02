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

function addBookToLibrary(obj) {
	myLibrary.push(obj);
	render();
}

function addBookToLibrary() {
	// do stuff here
}

let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let imageInput = document.getElementById('image');
document.querySelector('form.book-form').addEventListener('submit', function(e) {
	e.preventDefault();

	// console.log(titleInput.value);
	// console.log(authorInput.value);
	// console.log(imageInput.value);
	let h1 = document.createElement('h1');
	let h2 = document.createElement('h2');
	let imgDiv = document.createElement('img');
	let section = document.createElement('div');
	let addItem = document.querySelector('.library');
	// h1.textContent = printbooks()[0];
	h1.textContent = titleInput.value;
	h2.textContent = authorInput.value;
	imgDiv.src = `${imageInput.value}`;
	imgDiv.width = 200;

	addItem.appendChild(section);
	section.appendChild(h1);

	section.appendChild(h2);
	section.appendChild(imgDiv);
	titleInput.value = '';
	authorInput.value = '';
	imageInput.value = '';
});
