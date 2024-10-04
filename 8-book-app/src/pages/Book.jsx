import { useParams } from "react-router-dom";
// Hooks useID(), useRef(), useEffect(), useState() de react!
// React-router-dom -> useParams()

function Book() {
  const {bookId} = useParams();
  return <h1>Libro con el id: {bookId}</h1>;
}

export default Book;
