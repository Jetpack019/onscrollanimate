import React, { useEffect, useState } from 'react'
import './style.css'

const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0,
  }
function IntersectObs() {

  const [loaded,setLoad] = useState(false);

  useEffect(()=>{
    let observer = new window.IntersectionObserver(function(entries, self){
        // iterate over each entry
        entries.forEach((entry) =>{
            // Process image are intersecting
            if(entry.isIntersecting){
                // custom function that copies the path to the img
                // from data-src to src
                loadImages(entry.target);

                // the image is now in place, stop watching
                self.unobserve(entry.target);
            }
        })
    },config);
    const imgs = document.querySelectorAll('[data-src]');
    imgs.forEach(img => {
        observer.observe(img);
    });

    return () =>{
        imgs.forEach(img => {
            observer.observe(img);
        });
    }
  },[]);

  function loadImages(image){
    image.src = image.dataset.src;
  }

  return (
    <div className='App'>
        <h2>Lazy Load Images</h2>
        
        <img src="./images_IntersectObserver/img1.jpg" alt="img" width={500} height={250} />
        <img src="./images_IntersectObserver/img2.jpg" alt="img" width={500} height={250} />
        <img src="./images_IntersectObserver/img3.jpg" alt="img" width={500} height={250} />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Quis ab nulla velit numquam saepe laudantium. Molestias 
            possimus enim error laboriosam. Est iste earum ratione, 
            veniam pariatur, qui reprehenderit amet asperiores, 
            dolore voluptate eos. Unde tenetur maiores cum eius ut reiciendis.
        </p>
        <img 
        src={""} 
        data-src={"./images_IntersectObserver/img4.jpg"} 
        alt="img" 
        width={500} 
        height={250}  
        onload ={() => setLoad(true)} 
        className={loaded ? "loaded" : "loading"}
        />
        <img 
        src={""} 
        data-src={"./images_IntersectObserver/img5.jpg"} 
        alt="img" 
        width={500} 
        height={250}  
        onload ={() => setLoad(true)} 
        className={loaded ? "loaded" : "loading"}
        />
    </div>
  )
}

export default IntersectObs