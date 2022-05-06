import React from 'react'
import { useRouter } from 'next/router'

export const AboutMe = () => {
  const router = useRouter()
  return (
    <div className="resume" id="aboutMe">
      <p>Frontend developer, with a degree in business administration, Croosfiter, lover of motorSports, and all the mecaninc staff, traveller, i belive on the continuous learning as fundamental principle of life , I have worked around 6 years in the administration of public civil infrastructure projects, with the pandemic I wanted to do a big change on my professional life, and I take the decision to make the a switch of professional career .</p>
      <p>I'm currently improving my technical skills in frontend technologies... HTML, CSS, JAVASCRIPT, a fan of Vercel and its Next.js framework, I am also currently in an intensive learning program to successfully meet that goal, his name is Platzi Master.</p>
      <p>My goal is to never stop learning, and if on this industry we have unicorns, I want to be the same as pegasus!</p>
      <p>Thanks For Reading</p>
      <a onClick={() => (router.push('/videoAboutMe'))}><button className="button" type="text">MORE</button></a>
    </div>
  )
}
