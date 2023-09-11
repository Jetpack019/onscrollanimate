import React, { useEffect, useState } from 'react'
import { fetchImages } from './utils/fetchImage';
import { Image } from './component/image';

function IntersectObs3() {
    const [page,setPage] = useState(1);
    const [imageList,setImageList] = useState([])
    const nextPage = () =>{
        setPage(page + 1);
    }

    useEffect(()=>{
        fetchImages(page).then(images=> setImageList((prev) => [...prev,...images]))
    },[page])

    return (
        <div className="App">
            {imageList.map((image,index)=>(
                <Image 
                    key={image.id}
                    image={image} 
                    isLast={index === imageList.length - 1 }  
                    nextPage={nextPage} />
            ))}
        </div>
    )
}

export default IntersectObs3