import React, { useEffect, useMemo, useRef, useState } from 'react'
import './style.css'
import UseElementOnScreen from './hooks/useElementOnScreen';

function IntersectObs2() {
    
        const targetRef = useRef(null);
    const isVisible = UseElementOnScreen({
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
    },targetRef);


    return (
            <>
                <h1 className="header">
                    <p>{!isVisible ? 'not in viewport' : 'in viewport'} </p>
                </h1>

                <div className="gap"></div>

                <img src="./images_IntersectObserver/img3.jpg" alt="image-random" ref={targetRef} />
            </>
    )
}
 
export default IntersectObs2