import { useEffect, useRef, useState } from "react"
import { useObserver } from "../hooks/useObserver";
import './image.css'

export const Image = ({image, isLast,nextPage}) =>{
    const imageRef = useRef();
    const [imageUrl,setImageUrl] = useState('');
    const [isVisible,setVisible] = useState(false);
    const entry = useObserver(imageRef,{rootMargin: "100px"})
    const animatedEntry = useObserver(imageRef,{rootMargin: "0px"})

    useEffect(() => {
        if(!entry) return;
       
         if(isLast && entry.isIntersecting){
            nextPage();
         }
         if(entry.isIntersecting){
            setImageUrl(entry.target.dataset.src);
         }

    },[entry,isLast]);

    useEffect(()=>{
        if(animatedEntry?.isIntersecting){
            setVisible(true);
        }
    },[animatedEntry])

    const imageClass = `image ${isVisible ? "show" : ""}`;

    return (
        <div style={{minHeight: 100}}>
            <img 
            className={imageClass}
            ref={imageRef}
            src={imageUrl}
            data-src={`${image.download_url}.jpg`} 
            alt={image.author} 
            width="200" 
            />
        </div>
    )
}