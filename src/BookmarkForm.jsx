import { useState, useEffect } from "react";

// name: "Youtube",
// url: "https://www.youtube.com",
// isFavorite: false,
// category: "recreational",

const BookmarkForm = ({ setBookmarks, setToggleForm, edit, setEdit }) => {
  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    isFavorite: false,
    category: "",
  });

  function handleChange(e) {
    setBookmark({ ...bookmark, [e.target.id]: e.target.value });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const options = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(bookmark),
  //   };

  //   fetch("http://localhost:3003/api/bookmarks", options)
  //     .then((res) => res.json())
  //     .then((data) => setBookmarks(data.bookmarks))
  //     .then(() => setToggleForm(false));
  // }

  function handleSubmit(e) {
    e.preventDefault();

    if (edit.show) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookmark),
      };

      fetch(`http://localhost:3003/api/bookmarks/${edit.id}`, options)
        .then((res) => res.json())
        .then((data) => setBookmarks(data.bookmarks))
        .then(() => setToggleForm(false))
        .then(() => setEdit({ show: false, id: null }));
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookmark),
      };

      fetch("http://localhost:3003/api/bookmarks", options)
        .then((res) => res.json())
        .then((data) => setBookmarks(data.bookmarks))
        .then(() => setToggleForm(false))
        .then(() => setEdit({ show: false, id: null }));
    }
  }

  function handleCancel() {
    setEdit({ show: false, id: null });
    setToggleForm(false);
  }
  ``;

  useEffect(() => {
    if (edit.show) {
      fetch(`http://localhost:3003/api/bookmarks/${edit.id}`)
        .then((res) => res.json())
        .then((data) => setBookmark(data.bookmark));
    }
  }, [edit.id]);

  return (
    <div>
      <h1>BookMark Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            onChange={handleChange}
            type="text"
            id="name"
            name="name"
            value={bookmark.name}
          />
        </label>
        <label htmlFor="url">
          Url:
          <input
            onChange={handleChange}
            type="text"
            id="url"
            name="url"
            value={bookmark.url}
          />
        </label>
        <label htmlFor="category">
          Category:
          <input
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            value={bookmark.category}
          />
        </label>
        <button>Submit</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default BookmarkForm;
