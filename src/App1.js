import React, { useState } from "react";
import Comment1 from "./comment1";
export default function App1() {
  const [comment, setComments] = useState([
    { id: 1, comm: "First comment" },
    { id: 2, comm: "second comment" },
    { id: 3, comm: "Third comment" },
    { id: 4, comm: "Fourth comment" },
    { id: 5, comm: "Fifth comment" },
    { id: 6, comm: "Six comment" },
  ]);

  const handleClick = ()=>{
    setComments(comment.filter((comment)=>{
      return comment.id!=2;
    }))
  }
  return (
    <div>
      <ul className="text-start border mt-5 ">
        {comment.map((comment) => (
          <li>
            <mark>ID:-</mark> {comment.id} <em>Comments:-</em> {comment.comm}
          </li>
        ))}
        <button className="btn btn-danger m-3 w-25 rounded-pill" onClick={handleClick}>Delete</button>
      </ul>

      <Comment1 getdata={comment} />

    </div>
  );
}
