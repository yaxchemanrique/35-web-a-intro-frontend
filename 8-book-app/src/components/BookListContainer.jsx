import { Link } from "react-router-dom";
import styles from "./BookListContainer.module.css";

function BookListContainer({bookArr}) {
  return (
    <div className={styles.booksContainer}>
      {bookArr.map((book) => (
        <Link to={`/books/${book.id}`}>
          <img src={book.cover.imgSrc} alt={book.cover.alt} />
        </Link>
      ))}
    </div>
  );
}

export default BookListContainer;
