import { useEffect, useState } from "react";

const BookmarkDetails = ({ toggleDetails }) => {
  const [bookmarkDetail, setBookmarkDetail] = useState();

  useEffect(() => {
    fetch(`http://localhost:3003/api/bookmarks/${toggleDetails.id}`)
      .then((res) => res.json())
      .then((data) => setBookmarkDetail(data.bookmark));
  }, [toggleDetails.id]);

  if (!bookmarkDetail) return null;
  return (
    <div>
      <h1>BookmarkDetails</h1>
      <p>{bookmarkDetail.name}</p>
      <p>{bookmarkDetail.category}</p>
    </div>
  );
};

export default BookmarkDetails;
