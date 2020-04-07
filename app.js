let myLibrary = [];

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

// Display entered book info onto page

function displayBook() {
	let titleInput = document.getElementById('title');
	let authorInput = document.getElementById('author');
	let imageInput = document.getElementById('image');
	let beenRead = document.getElementById('is-read');
	document.querySelector('form.book-form').addEventListener('submit', function(e) {
		e.preventDefault();
		let h1 = document.createElement('h1');
		let h2 = document.createElement('h2');
		let h3 = document.createElement('h3');
		let h3delete = document.createElement('button');
		let imgDiv = document.createElement('img');
		let section = document.createElement('div');
		let addItem = document.querySelector('.library');
		h1.textContent = titleInput.value;
		h2.textContent = authorInput.value;

		h3.innerHTML = `<label class="checked-read">Read
      <input type="checkbox" checked="checked">
      <span class="checkmark"></span>
    </label>`;

		// let selectRead = document.querySelector('.custom-select');

		imgDiv.src = `${imageInput.value}`;
		imgDiv.width = 200;
		h3delete.textContent = 'Delete';
		h3delete.classList.add('book-delete');

		addItem.appendChild(section);
		section.classList.add('current-div');
		section.appendChild(h1);

		section.appendChild(h2);
		section.appendChild(imgDiv);
		section.appendChild(h3);
		section.appendChild(h3delete);
		titleInput.value = '';
		authorInput.value = '';
		imageInput.value = '';
		deleteBook();
	});
}

// Delete book from display

function deleteBook() {
	let deleteBtn = document.querySelectorAll('.book-delete');
	deleteBtn.forEach((button) => {
		button.addEventListener('click', function(e) {
			console.log(e.target.parentElement.parentElement);
			e.target.parentElement.remove();
		});
	});
}

displayBook();
