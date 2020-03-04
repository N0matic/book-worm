import React from 'react';
const URL = "https://covers.openlibrary.org/b/id/";
const size = "-M.jpg";
function BookDetail(props) {
  // console.log(props)
  return (
    <div className="text-center w-48 h-auto mx-auto my-4 bg-gray-700">
      <img src={URL + props.cover_i + size} style={{ margin: "auto" }} alt="" />
      <div className="addBookBtn"><strong>Title: </strong>{props.title_suggest}</div>
      <div><strong>Author: </strong>{props.author_name}</div>
      <div><strong>Year Published: </strong>{props.first_publish_year}</div>
      <div><strong>ID: </strong>{props.cover_i}</div>
      <button className="addBookBtn" onClick={(event) => {
        event.preventDefault();
        props.handleBtnClick(props)
      }}>Add Book</button>
    </div>
  )
}

export default BookDetail