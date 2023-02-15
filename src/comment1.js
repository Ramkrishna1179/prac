import React,{useState}from "react";

export default function Comment1(props) {
  return (
    <div>
      <ul className="text-start border mt-5">
        {props.getdata.map((getdata)=>
        <li>
            <mark>ID:-</mark> {getdata.id} <em>getdatas:-</em> {getdata.comm}
        </li>)}
      </ul>
    </div>
  )
}
