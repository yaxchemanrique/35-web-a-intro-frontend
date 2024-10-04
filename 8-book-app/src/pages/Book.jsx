import { useParams, Navigate } from "react-router-dom";
// Hooks useID(), useRef(), useEffect(), useState() de react!
// React-router-dom -> useParams()

import BOOKS_DATA from "../booksData";

function Book() {
  const { bookId } = useParams();
  const bookSelected = BOOKS_DATA.find((book) => book.id == bookId);
  // console.log(bookSelected)

  if (!bookSelected) {
    return <Navigate to="*" />;
  }

  return (
    <main>
      <div>
        <h1>{bookSelected.title}</h1>
        <h2>{bookSelected.author}</h2>
        <p>{bookSelected.description}</p>
      </div>
      <div>
        <img src={bookSelected.cover.imgSrc} alt={bookSelected.cover.alt} />
      </div>
    </main>
  );
}

export default Book;
