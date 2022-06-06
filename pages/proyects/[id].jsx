import React from 'react'
import {design} from '../api/designed.cherced'
import {useRouter} from 'next/router'
import { HeaderBack } from '../../Components/atoms/headerBack'


const Proyects = () => {
  const id = useRouter().query;
  console.log(id);
  const data = design;  
  const proyect = data.find(proyect => proyect.id === id.id);
  console.log(proyect)

  return (
    <div className='ProyectContainer'>
      <HeaderBack />
      <div className='Proyect'>
        <div className='Proyect-image'>
          <img src={proyect.image} alt={proyect.title}/>
          </div>
          <div className='Proyect-info'>
            <h1>{proyect.title}</h1>
            <p>{proyect.description}</p>
            <div className='Proyect-tech'>
            {
              proyect.technologies.map(tech => (
                
                <p>{tech}</p>
                ))
            }
            </div>
            <div className='Proyect-info-links'>
              <a href={proyect.link} target='_blank' rel="noopener noreferrer">
                <button>
                  <span>Live</span>
                </button>
              </a>
              <a href={proyect.github} target='_blank' rel="noopener noreferrer">
                <button>
                  <span>Github</span>
                </button>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Proyects