import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// Components
import Bookmarks from "./Bookmarks";
import BookmarkDetails from "./BookmarkDetails";
import BookmarkForm from "./BookmarkForm";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  // this state will toggle the BookmarkDetails compoent and send the id
  const [toggleDetails, setToggleDetails] = useState({ show: false, id: null });
  const [toggleForm, setToggleForm] = useState(false);
  const [edit, setEdit] = useState({ show: false, id: null });

  useEffect(() => {
    fetch("http://localhost:3003/api/bookmarks")
      .then((res) => res.json())
      .then((data) => setBookmarks(data.bookmarks));
  }, []);

  return (
    <div>
      <h1>Bookmarks Frontend</h1>

      <Link to="/new">
        <button>Create Bookmark</button>
      </Link>

      <Routes>
        {/* show all bookmarks component */}
        <Route
          path="/"
          element={
            <Bookmarks
              setToggleDetails={setToggleDetails}
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
              edit={edit}
              setEdit={setEdit}
            />
          }
        />
        {/* details route */}
        <Route
          path="/:id"
          element={<BookmarkDetails toggleDetails={toggleDetails} />}
        />
        {/* edit route */}
        <Route
          path="/edit/:id"
          element={
            <BookmarkForm
              edit={edit}
              setEdit={setEdit}
              setBookmarks={setBookmarks}
              setToggleForm={setToggleForm}
            />
          }
        />
        {/* create new bookmark */}
        <Route
          path="/new"
          element={
            <BookmarkForm
              edit={edit}
              setEdit={setEdit}
              setBookmarks={setBookmarks}
              setToggleForm={setToggleForm}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
