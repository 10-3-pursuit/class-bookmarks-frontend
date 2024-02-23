import { useEffect } from "react";

const Bookmarks = ({ bookmarks, setBookmarks, setToggleDetails }) => {
  useEffect(() => {
    fetch("http://localhost:3003/api/bookmarks")
      .then((res) => res.json())
      .then((data) => setBookmarks(data.bookmarks));
  }, []);

  if (bookmarks.length === 0) return null;

  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmarks.map(({ id, name, category }) => (
        <div key={id}>
          <h3>Name: {name}</h3>
          <p>Category: {category}</p>
          <button onClick={() => setToggleDetails({ show: true, id })}>
            Details
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
