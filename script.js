const myLibrary = []
const addbook = document.querySelector('#addbook')

function Book (title, author) {
  this.title = title
  this.author = author
}

function addBookToLibrary (event) {
  const title = document.querySelector('#title')
  const author = document.querySelector('#author')

  if (
    title.value !== '' &&
    author.value !== '' &&
    findBook(title.value, author.value) === false
  ) {
    const newBook = new Book(title.value, author.value)
    myLibrary.push(newBook)
    displayBook(newBook)
    title.value = ''
    author.value = ''
  }
  event.preventDefault()
}
function removeBookFromLibrary (event) {
  const title = event.srcElement.nextElementSibling.textContent
  const author =
    event.srcElement.nextElementSibling.nextElementSibling.textContent
  const parentClass = event.srcElement.parentElement
  parentClass.remove()

  const bookIndex = findBook(title, author)
  if (bookIndex !== false) {
    myLibrary.splice(bookIndex, 1)
  }
}
function findBook (title, author) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].title === title && myLibrary[i].author === author) {
      return i
    }
  }
  return false
}

function displayBook (book) {
  const libraryClass = document.querySelector('.library')
  const deleteClass = document.createElement('button')
  deleteClass.className = 'delete'
  deleteClass.textContent = 'X'
  const bookClass = document.createElement('div')
  bookClass.className = 'book'
  const titleClass = document.createElement('div')
  titleClass.className = 'title'
  titleClass.textContent = book.title
  const authorClass = document.createElement('div')
  authorClass.className = 'author'
  authorClass.textContent = book.author
  libraryClass.appendChild(bookClass)
  bookClass.appendChild(deleteClass)
  bookClass.appendChild(titleClass)
  bookClass.appendChild(authorClass)
  deleteClass.addEventListener('click', removeBookFromLibrary)
}

addbook.addEventListener('click', addBookToLibrary)

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien'))
myLibrary.push(new Book('Fall of Giants', 'Ken Follett'))
myLibrary.push(new Book('The SAS Survival Handbook', 'John Wiseman'))
myLibrary.forEach(displayBook)
