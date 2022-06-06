import React from 'react'
import {useRouter} from 'next/router'

export const CarruselContainer = (props) => {
    const router = useRouter();    
    function goToPage() {
        router.push(`proyects/${props.id}`)
    }
    return (
    <button onClick={goToPage} className="sliderContentItem__image">
        <img className="sliderImg" src={props.src} alt="movies top"/>
    </button>
  )
}
