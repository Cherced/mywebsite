import React from 'react'

export const Proyects = () => {
  return (
    <React.Fragment>
<section className="section-main--two" id="services">
<div className="main-skills--container">
<div className="titleBoxServices">SERVICES</div>
    <div className="box-model one">
      <img src="/assets/images/Desing.png" alt="desingIcon" />
      <h1>DESING</h1>
      <p>
        I can design the website based on your needs and suggestions. I
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
        <ul>
          <li>ALL</li>
          <li>CODED</li>
        </ul>
        <li>DESIGNED</li>
      </div>
      <aside className="proyect-carrusel--container">
        <div className="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button className="button" type="text">DEMO</button>
            <button className="button" type="text">MORE</button>
          </ul>
        </div>
        <div className="boxSample">
          <p>coded, designed</p>
          <h1>LOGOS IT</h1>
          <p>Digital services hosted in Colombia</p>
          <ul>
            <button className="button" type="text">DEMO</button>
            <button className="button" type="text">MORE</button>
          </ul>
        </div>
        <div className="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button className="button" type="text">DEMO</button>
            <button className="button" type="text">MORE</button>
          </ul>
        </div>
        <div className="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button className="button" type="text">DEMO</button>
            <button className="button" type="text">MORE</button>
          </ul>
        </div>
        <div className="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button className="button" type="text">DEMO</button>
            <button className="button" type="text">MORE</button>
          </ul>
        </div>
        <div className="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button className="button" type="text">DEMO</button>
            <button className="button" type="text">MORE</button>
          </ul>
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
