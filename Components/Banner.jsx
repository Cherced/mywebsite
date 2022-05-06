import React from 'react'

export const Banner = () => {
  return (
 <section className="section-main--one" id="Top">
  <div className="main-banner--container">                
    <div className="banner-text--containerOne">
      <h2>my Name is Camilo</h2>
      <h1>I’M A DEVELOPER</h1>
    </div>
    <div className="banner-text--containerTwo">
      <h2>Hi, I am</h2>
      <h1>Camilo Hernandez</h1>
      <p>Front-end Developer / Business Manager</p>
    </div>
    <img src="/assets/images/separatorWhite2.png" alt="separador" className="separador" />                
    <div className="banner-img--container">
      <a href="mailto:chernandezcediel@gmail.com"><img src="/assets/images/cib_mail-ru.png" alt="Mail" /></a>
      <a href="https://github.com/Cherced"><img src="/assets/images/ant-design_github-filled.png" alt="GITHUB" className="git" /></a>
      <a href="https://linkedin.com/in/cherced"><img src="/assets/images/entypo-social_linkedin-with-circle.png" alt="LINKEDIN" /></a>        
    </div>                    
  </div>
</section>
  )
}
