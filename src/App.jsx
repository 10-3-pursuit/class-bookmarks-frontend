import { useState } from "react";
import Bookmarks from "./Bookmarks";
import BookmarkDetails from "./BookmarkDetails";
import BookmarkForm from "./BookmarkForm";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  // this state will toggle the BookmarkDetails compoent and send the id
  const [toggleDetails, setToggleDetails] = useState({ show: false, id: null });

  return (
    <div>
      <h1>Bookmarks Frontend</h1>
      <Bookmarks
        setToggleDetails={setToggleDetails}
        bookmarks={bookmarks}
        setBookmarks={setBookmarks}
      />
      {toggleDetails.show && <BookmarkDetails toggleDetails={toggleDetails} />}
      <BookmarkForm />
    </div>
  );
};

export default App;
