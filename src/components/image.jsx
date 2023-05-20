import "../styles/Image.css";
import image1 from "../image/IMAGE_one.jpg";
import image2 from "../image/IMAGE_two.jpg";
import image3 from "../image/IMAGE_three.jpg";
import image4 from "../image/IMAGE_four.jpg";
import image5 from "../image/IMAGE_five.jpg";
import ButtonComponent from "./btn-like-dislike";


const ImageComponent = () => {
    let data=[
        {
            id:1,
            imgSrc: image1,
        },
        {
            id:2,
            imgSrc: image2,
        },
        {
            id:3,
            imgSrc: image3,
        },
        {
            id:4,
            imgSrc: image4,
        },
        {
            id:5,
            imgSrc: image5,
        },
    ]
    return (
    <>
        <div className="gallery">
            {data.map((item, index) => {
                return (
                    <div key={index} className="pics">
                        <img src={item.imgSrc} style={{width: '100%'}}/>
                        <ButtonComponent/>
                    </div>
                )
            })}
        </div>

    </>
    );
};

export default ImageComponent;