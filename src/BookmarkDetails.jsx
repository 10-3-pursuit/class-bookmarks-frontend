import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookmarkDetails = () => {
  const { id } = useParams();

  const [bookmarkDetail, setBookmarkDetail] = useState();

  useEffect(() => {
    fetch(`http://localhost:3003/api/bookmarks/${id}`)
      .then((res) => res.json())
      .then((data) => setBookmarkDetail(data.bookmark));
  }, [id]);

  if (!bookmarkDetail) return null;
  return (
    <div>
      <h1>BookmarkDetails</h1>
      <p>{bookmarkDetail.name}</p>
      <p>{bookmarkDetail.category}</p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default BookmarkDetails;
