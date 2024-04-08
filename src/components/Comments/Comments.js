import "./Comments.scss";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import FetchDetails from "../../hooks/fetchDetails.js";

function UserComments({ selectedVid, datefunction }) {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  const displayVid = FetchDetails(baseUrl, selectedVid);
  if (!selectedVid || !displayVid) {
    return <div>Loading...</div>;
  }

  const comments = displayVid.comments;
  return (
    <div className="user-comments">
      {comments.map((comment) => {
        return (
          <div key={comment.id} className="comment">
            <div alt="avatar" className="comment-avatar" />
            <p className="comment-date">{datefunction(comment.timestamp)}</p>
            <h3 className="comment-name">{comment.name}</h3>
            <p className="comment-text">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserComments;
