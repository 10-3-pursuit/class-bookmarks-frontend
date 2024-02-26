import { useState, useEffect } from "react";
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
      {!toggleForm && (
        <button onClick={() => setToggleForm(true)}>Create Bookmark</button>
      )}
      <Bookmarks
        setToggleDetails={setToggleDetails}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
        edit={edit}
        setEdit={setEdit}
      />
      {toggleDetails.show && <BookmarkDetails toggleDetails={toggleDetails} />}
      {(edit.show || toggleForm) && (
        <BookmarkForm
          edit={edit}
          setEdit={setEdit}
          setBookmarks={setBookmarks}
          setToggleForm={setToggleForm}
        />
      )}
    </div>
  );
};

export default App;
