import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import FavoriteBooks from "./components/FavoriteBooks";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path='/books' element={<FavoriteBooks />}>
          <Route index={true} element={<BookList />} />
          <Route path=":bookId" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
