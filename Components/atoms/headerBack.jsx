import React from 'react'
import {useRouter} from 'next/router'

export const HeaderBack = () => {
    const router = useRouter()

  return (
    <div className='HeaderBack'>
        <div className='HeaderBack-container'>
            <button onClick={()=> router.push(`/home`)} className="backButton">
            &#60;
            </button>
        </div>
    </div>
  )
}
