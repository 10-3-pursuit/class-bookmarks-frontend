import { useState } from "react";
import Bookmarks from "./Bookmarks";
import BookmarkDetails from "./BookmarkDetails";
import BookmarkForm from "./BookmarkForm";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  // this state will toggle the BookmarkDetails compoent and send the id
  const [toggleDetails, setToggleDetails] = useState({ show: false, id: null });
  const [toggleForm, setToggleForm] = useState(false);

  return (
    <div>
      <h1>Bookmarks Frontend</h1>
      <button onClick={() => setToggleForm(true)}>Create Bookmark</button>
      <Bookmarks
        setToggleDetails={setToggleDetails}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
      {toggleDetails.show && <BookmarkDetails toggleDetails={toggleDetails} />}
      {toggleForm && (
        <BookmarkForm
          setBookmarks={setBookmarks}
          setToggleForm={setToggleForm}
        />
      )}
    </div>
  );
};

export default App;
