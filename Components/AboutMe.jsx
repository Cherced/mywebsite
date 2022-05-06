import React from 'react'
import { useRouter } from 'next/router'

export const AboutMe = () => {
  const router = useRouter()
  return (
    <div className="resume" id="aboutMe">
      <p>Frontend developer, with a degree in business administration. I’m a Croosfiter, lover of motorSports, and all the mechanic stuff, traveller. I believe in continuous learning as a fundamental principle of life. In addition, I have worked for around 6 years in the administration of public civil infrastructure projects. </p>
      <p>When Covid-19 impacted the world I wanted to do a big change in my professional life, and I decide to make the switch to a professional career.
          I'm currently improving my technical skills in frontend technologies... HTML, CSS, JAVASCRIPT, a fan of Vercel and its Next.js framework. 
          I'm in an intensive learning program to successfully meet that goal, its name is Platzi Master.</p>
      <p>My goal is to never stop learning, and if on this industry we have unicorns, I want to be the same as pegasus!</p>
      <p>Thanks For Reading</p>
      <a onClick={() => (router.push('/VideoAboutMe'))}><button className="button" type="text">MORE</button></a>
    </div>
  )
}
