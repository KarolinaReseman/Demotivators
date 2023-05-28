import React, { useState } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import ImageComponent from "./components/image";
import image1 from "./image/IMAGE_one.jpg";
import image2 from "./image/IMAGE_two.jpg";
import image3 from "./image/IMAGE_three.jpg";
import image4 from "./image/IMAGE_four.jpg";
import image5 from "./image/IMAGE_five.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [memes, setMemes] = useState([
    {
      id: 1,
      imgSrc: image1,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 2,
      imgSrc: image2,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 3,
      imgSrc: image3,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 4,
      imgSrc: image4,
      likes: 0,
      dislikes: 0,
    },
    {
      id: 5,
      imgSrc: image5,
      likes: 0,
      dislikes: 0,
    },
  ]);

  const upvote = (memeId) => {
    const memesCopy = [...memes];
    const memeIndex = memes.findIndex((meme) => meme.id === memeId);
    memesCopy[memeIndex] = {
      ...memesCopy[memeIndex],
      likes: memesCopy[memeIndex].likes + 1,
    };
    setMemes(memesCopy);
  };

  const downvote = (memeId) => {
    const memesCopy = [...memes];
    const memeIndex = memes.findIndex((meme) => meme.id === memeId);
    memesCopy[memeIndex] = {
      ...memesCopy[memeIndex],
      likes: memesCopy[memeIndex].dislikes + 1,
    };
    setMemes(memesCopy);
  };

  return (
    <BrowserRouter>
      <div>
        <NavbarComponent />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ImageComponent
                memes={memes}
                upvote={upvote}
                downvote={downvote}
                isHotList={false}
              />
            }
          />
          <Route
            path="/hot"
            element={
              <ImageComponent
                memes={memes}
                upvote={upvote}
                downvote={downvote}
                isHotList={true}
              />
            }
          />
          <Route path="*" element={() => <h1>EEEE</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
