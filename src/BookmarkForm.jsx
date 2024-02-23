import { useState, useEffect } from "react";

// name: "Youtube",
// url: "https://www.youtube.com",
// isFavorite: false,
// category: "recreational",

const BookmarkForm = () => {
  const [bookmark, setBookmark] = useState({
    name: "",
    url: "",
    isFavorite: false,
    category: "",
  });

  function handleChange(e) {
    setBookmark({ ...bookmark, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

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
    </div>
  );
};

export default BookmarkForm;
