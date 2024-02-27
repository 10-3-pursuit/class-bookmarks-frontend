import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// name: "Youtube",
// url: "https://www.youtube.com",
// isFavorite: false,
// category: "recreational",

const BookmarkForm = ({ setBookmarks, setToggleForm, edit, setEdit }) => {
  const navigate = useNavigate();
  const { id } = useParams();

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

    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookmark),
      };

      fetch(`http://localhost:3003/api/bookmarks/${id}`, options)
        .then((res) => res.json())
        .then((data) => setBookmarks(data.bookmarks))
        .then(() => navigate("/"));
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookmark),
      };

      fetch("http://localhost:3003/api/bookmarks", options)
        .then((res) => res.json())
        .then((data) => setBookmarks(data.bookmarks))
        .then(() => navigate("/"));
    }
  }

  function handleCancel() {
    navigate("/");
  }

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3003/api/bookmarks/${id}`)
        .then((res) => res.json())
        .then((data) => setBookmark(data.bookmark));
    } else {
      setBookmark({
        name: "",
        url: "",
        isFavorite: false,
        category: "",
      });
    }
  }, [id]);

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
