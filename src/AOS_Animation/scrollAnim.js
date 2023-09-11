import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './animation.css'

function ScrollAnim() {
  
    useEffect(() =>{
      AOS.init({duration: 2000})
    },[])
  
    return (
      <div>
        
        <div className="top" style={{height:"100vh"}}>
          <h1 className='text-center'>This is my React Animation Scroll</h1> <br/> <br/> <br/> <br/>
          <h1>Flip</h1>
          <div className="animation" data-aos="fade-up"></div>
  
          <h1>Zoom</h1>
          <div className="animation" data-aos="zoom-in"></div>
      </div>
      <div className="next" style={{height:"100vh"}}>
        <h1>Fade</h1>
          <div className="animation" data-aos="fade-up"></div>
          <div className="animation" data-aos="fade-down"></div>
          <div className="animation" data-aos="fade-right"></div>
          <div className="animation" data-aos="fade-left"></div>
      </div>
  
            
      <div className="top" style={{height:"100vh"}}>
          <h1 className='text-center'>This is my React Animation Scroll</h1> <br/> <br/> <br/> <br/>
          <h1>Flip</h1>
          <div className="animation" data-aos="flip-right"></div>
  
          <h1>Zoom</h1>
          <div className="animation" data-aos="zoom-in"></div>
      </div>
      </div>
      
  )
}

export default ScrollAnim;
