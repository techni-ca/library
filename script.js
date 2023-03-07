const myLibrary = []
const addbook = document.querySelector('#addbook')

function Book (title, author) {
  this.title = title
  this.author = author
}

function addBookToLibrary (event) {
  const title = document.querySelector('#title')
  const author = document.querySelector('#author')

  if ((title.value !== '') && (author.value !== '')) {
    const newBook = new Book(title.value, author.value)
    myLibrary.push(newBook)
    displayBook(newBook)
    title.value = ''
    author.value = ''
  }
  event.preventDefault()
}

function displayBook (book) {
  const libraryClass = document.querySelector('.library')
  const bookClass = document.createElement('div')
  bookClass.className = 'book'
  const titleClass = document.createElement('div')
  titleClass.className = 'title'
  titleClass.textContent = book.title
  const authorClass = document.createElement('div')
  authorClass.className = 'author'
  authorClass.textContent = book.author
  libraryClass.appendChild(bookClass)
  bookClass.appendChild(titleClass)
  bookClass.appendChild(authorClass)
}

addbook.addEventListener('click', addBookToLibrary)
