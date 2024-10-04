import BOOKS_DATA from "../booksData"
import BookListContainer from "../components/BookListContainer"

function BookList() {
  return (
    <main>
      <h1>BookList</h1>
      <BookListContainer bookArr={BOOKS_DATA}/>
    </main>
  )
}

export default BookList