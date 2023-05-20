import {useState} from 'react';
import "../styles/btn-like-dislike.css";

const ButtonComponent = () => {
    const[like, setlike] = useState(0);
    const[dislike, setdislike] = useState(0)

    const[likeactive, setlikeactive] = useState(false);
    const[dislikeactive, setdislikeactive] = useState(false)

    function likef(){
        if(likeactive){
            setlikeactive(false);
            setlike(like-1)
        } else {
            setdislikeactive(true);
            setlike(like+1);
            if(dislikeactive){
                setdislikeactive(false);
                setlike(like+1);
                setdislike(like-1)
            }
        }
    }

    function dislikef(){
        if(dislikeactive){
            setdislikeactive(false);
            setdislike(dislike-1)
        } else {
            setdislikeactive(true);
            setdislike(like+1);
            if(likeactive){
                setdislikeactive(false);
                setdislike(dislike+1);
                setlike(like-1)
            }
        }
    }

    return(
        <>
        <div class="BTN">
            <button onClick={likef}>Like {like}</button>
            <button onClick={dislikef}>Disike {dislike}</button>
        </div>
        </>
    );
}
export default ButtonComponent;