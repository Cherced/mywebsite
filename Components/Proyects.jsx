import React from 'react'
import { CarruselContainer } from './CarruselContainer'

export const Proyects = () => {
  const [projects, setProjects] = React.useState([])
  
  function next(){
    console.log('next')
    const slider = document.querySelector('#slider');
    let sliderSection = document.querySelectorAll('.sliderContentItem__image');
    let sliderSectionFirst = sliderSection[0];
    console.log(sliderSectionFirst);
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
    slider.style.transition = "none"; 
    slider.insertAdjacentElement('beforeend', sliderSectionFirst);
    slider.style.marginLeft = "-100%";
}
,500);
}
function prev(){
    console.log('prev')
    const slider = document.querySelector('#slider');
    let sliderSection = document.querySelectorAll('.sliderContentItem__image');
    let sliderSectionLength = sliderSection.length;
    let sliderSectionLast = sliderSection[sliderSectionLength - 1];
    console.log(sliderSectionLast);
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
    slider.style.transition = "none"; 
    slider.insertAdjacentElement('afterbegin', sliderSectionLast);
    slider.style.marginLeft = "-100%";
}
,500);
}

const handleClickRight = () => {
    console.log("click");
    next();
}

const handleClickLeft = () => {
    console.log("click");
    prev();
} 
    React.useEffect(() => {
      let mounted = true;
      if (mounted) {
        window.fetch('/api/projects').then(res => res.json()).then(data => {
          setProjects(data)
        })
      }
      return () => mounted = false;
    }, [])
      
  return (
    <React.Fragment>
<section className="section-main--two" id="services">
<div className="main-skills--container">
<div className="titleBoxServices">SERVICES</div>
<div className="main-skills--container--text">
<div className="box-model one">
      <img src="/assets/images/Desing.png" alt="desingIcon" />
      <h1>DESING</h1>
      <p>
        I can desing the website based on your needs and suggestions. I
        can also create it from scratch by consulting with you during
        work.
      </p>
    </div>
    <div className="box-model two">
      <img src="/assets/images/dev.png" alt="dev" />
      <h1>DEVELOPEMENT</h1>
      <p>
        Based on a project created by me (or any another one provided by
        you), I can code the website to be fully functional and
        responsive.
      </p>
    </div>
    <div className="box-model three">
      <img src="/assets/images/maintenance.png" alt="MantIcon" />
      <h1>MAINTENANCE</h1>
      <p>
        I will look after your website, and in case of problems or the
        need for changes, I can introduce new functionalities and
        solutions.
      </p>
    </div>
</div>
    
  </div>
  </section>
  <div className="main-skills--tech">
    <div className="titleBox">SKILLS</div>
    <h2 id="unic">USING NOW:</h2>
    <img src="/assets/images/Group15.png" alt="htmlICON" />
    <h1>HTML</h1>
    <img src="/assets/images/Group16.png" alt="CSS3ICON" />
    <h1>CSS3</h1>
    <img src="/assets/images/Vector.png" alt="SASSICON" />
    <h1>SASS</h1>
    <img src="/assets/images/REACT.png" alt="SASSICON" />
    <h1>REACT</h1>
    <img src="/assets/images/VanillaJS.png" alt="SASSICON" />
    <h1>JAVASCRIPT</h1>
  </div>
  <section className="section-main-three" id="portfolio">
    <div className="main-proyect--container">
      <div className="proyect-button--container">
        <div className="titleBox">PORTFOLIO</div>
      </div>
      <div className="proyect-nav--container">
       
      </div>
      <aside className="proyect-carrusel--container">
      <div className="sliderInfiniteMoviesContainer">
        <div className="sliderContent" id="slider">
          {
            projects.map((item, index) => {
              return (
                <CarruselContainer key={index} id={item.id} src={item.image}/>
              )
            })
          }
        </div>
      </div>
      <div className="sliderBtnContainer">
        <button onClick={handleClickLeft} className="slider--BTN btn--lf" id="btn-lf">
            &#60;
        </button>
        <button onClick={handleClickRight} className="slider--BTN btn--rg" id="btn-rg">
           &#62;
        </button>
      </div>
        <div className="footer-proyect--container">
          <p>And many more to come!</p>
        </div>
      </aside>
    </div>
  </section>
  </React.Fragment>
  )
}
