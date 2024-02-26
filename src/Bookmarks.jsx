const Bookmarks = ({
  bookmarks,
  setBookmarks,
  setToggleDetails,
  edit,
  setEdit,
}) => {
  if (bookmarks.length === 0) return null;

  function handleDelete(id) {
    const options = {
      method: "DELETE",
    };

    fetch(`http://localhost:3003/api/bookmarks/${id}`, options)
      .then((res) => res.json())
      .then((data) => setBookmarks(data.bookmarks));
  }

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
          <button onClick={() => setEdit({ show: true, id })}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Bookmarks;
