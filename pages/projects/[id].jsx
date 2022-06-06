import React from 'react'
import {useRouter} from 'next/router'
import { HeaderBack } from '../../Components/atoms/headerBack'
import {projects} from '../api/projects'


const Proyects = () => {
  const router = useRouter()
  const { id } = router.query
  const [project, setProject] = React.useState([]);
  
  React.useEffect(() => {
    let mounted = true;
    if (mounted) {
      window.fetch(`/api/projects/${id}`).then(res => res.json()).then(data => {
        console.log(data)
        setProject(data)
      })
    }
    return () => mounted = false;
  }, [])

  return (
    <div className='ProyectContainer'>
      <HeaderBack />
      <div className='Proyect'>
        <div className='Proyect-image'>
          <img src={project.image} alt={project.title}/>
          </div>
          <div className='Proyect-info'>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <div className='Proyect-tech'>
      {/*       {
              project.technologies.map(tech => (
                
                <p>{tech}</p>
                ))
            } */}
            </div>
            <div className='Proyect-info-links'>
              <a href={project.link} target='_blank' rel="noopener noreferrer">
                <button>
                  <span>Live</span>
                </button>
              </a>
              <a href={project.github} target='_blank' rel="noopener noreferrer">
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