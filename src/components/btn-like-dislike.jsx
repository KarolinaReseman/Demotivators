import { useState } from "react";
import "../styles/btn-like-dislike.css";

const ButtonComponent = ({ upvote, downvote }) => {
  function likef() {
    upvote();
  }

  function dislikef() {
    downvote();
  }

  return (
    <>
      <div class="BTN">
        <button onClick={likef}>Like</button>
        <button onClick={dislikef}>Disike</button>
      </div>
    </>
  );
};
export default ButtonComponent;
