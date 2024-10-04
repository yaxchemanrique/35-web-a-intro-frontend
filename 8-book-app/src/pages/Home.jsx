import { Link } from "react-router-dom";
import BOOKS_DATA from "../booksData.js";
import BookListContainer from "../components/BookListContainer.jsx";

const favoriteBooks = BOOKS_DATA.slice(5);
const readBooks = BOOKS_DATA.slice(0, 5);
console.log({ favoriteBooks });
console.log({ readBooks });

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <h2>Favorite Books</h2>
      <BookListContainer bookArr={favoriteBooks}/>
      {/* <div className={styles.booksContainer}>
        {favoriteBooks.map((book, i) => (
          <Link to={`/books/${i + 5}`}>
            <img src={book.cover.imgSrc} alt={book.cover.alt} />
          </Link>
        ))}
      </div> */}
      <h2>Read Books</h2>
      <BookListContainer bookArr={readBooks}/>
      {/* <div className={styles.booksContainer}>
        {readBooks.map((book, i) => (
          <Link to={`/books/${i}`}>
            <img src={book.cover.imgSrc} alt={book.cover.alt} />
          </Link>
        ))}
      </div> */}
    </main>
  );
}

export default Home;
