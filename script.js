const myLibrary = []
const addbook = document.querySelector('#addbook')

class Book {
  constructor (title, author) {
    this.title = title
    this.author = author
    this.read = false
  }
}

function addBookToLibrary (event) {
  const title = document.querySelector('#title')
  const author = document.querySelector('#author')

  if (title.value !== '' && author.value !== '') {
    const newBook = new Book(title.value, author.value)
    let index = myLibrary.length
    for (let i = 0; i < index; i++) {
      if (myLibrary[i] === null) {
        index = i
        break
      }
    }
    myLibrary[index] = newBook
    displayBook(index)
    title.value = ''
    author.value = ''
  }
  event.preventDefault()
}
function removeBookFromLibrary (event) {
  const parentClass = event.srcElement.parentElement
  const bookIndex = parentClass.dataset.index
  parentClass.remove()

  myLibrary[bookIndex] = null
}
function toggleReadStatus (event) {
  const parentClass = event.srcElement.parentElement
  const bookIndex = parentClass.dataset.index
  myLibrary[bookIndex].read = !myLibrary[bookIndex].read
  event.srcElement.textContent = myLibrary[bookIndex].read ? 'Read' : 'Unread'
}

function displayBook (index) {
  const book = myLibrary[index]
  const libraryClass = document.querySelector('.library')
  const deleteClass = document.createElement('button')
  deleteClass.className = 'delete'
  deleteClass.textContent = 'X'
  const bookClass = document.createElement('div')
  bookClass.className = 'book'
  bookClass.dataset.index = index.toString()
  const titleClass = document.createElement('div')
  titleClass.className = 'title'
  titleClass.textContent = book.title
  const authorClass = document.createElement('div')
  authorClass.className = 'author'
  authorClass.textContent = book.author
  const readClass = document.createElement('button')
  readClass.className = 'read'
  readClass.textContent = 'Unread'
  libraryClass.appendChild(bookClass)
  bookClass.appendChild(deleteClass)
  bookClass.appendChild(titleClass)
  bookClass.appendChild(authorClass)
  bookClass.appendChild(readClass)
  deleteClass.addEventListener('click', removeBookFromLibrary)
  readClass.addEventListener('click', toggleReadStatus)
}

addbook.addEventListener('click', addBookToLibrary)

myLibrary.push(new Book('The Hobbit', 'J.R.R. Tolkien'))
myLibrary.push(new Book('Fall of Giants', 'Ken Follett'))
myLibrary.push(new Book('The SAS Survival Handbook', 'John Wiseman'))
for (let i = 0; i < myLibrary.length; i++) {
  displayBook(i)
}
