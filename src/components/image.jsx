import "../styles/Image.css";
import ButtonComponent from "./btn-like-dislike";

const ImageComponent = ({ memes, downvote, upvote, isHotList }) => {
  const filteredMemes = isHotList
    ? memes.filter((meme) => meme.likes >= 10)
    : memes.filter((meme) => meme.likes < 10) 




  return (
    <>
      <div className="gallery">
        {filteredMemes.map((item, index) => {
          return (
            <div key={index} className="pics">
              <img src={item.imgSrc} style={{ width: "100%" }} alt="" />
              <div style={{ background: "white" }}>
                UP: {item.likes}
                DOWN: {item.dislikes}
              </div>
              <ButtonComponent
                downvote={() => downvote(item.id)}
                upvote={() => upvote(item.id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageComponent;
