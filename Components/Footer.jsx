import React from 'react'

export const Footer = () => {
  return (
<footer>
  <section className="section-footer--one">
    <div className="footer-contactme--container">
      <div className="titleBox">CONTACT</div>
      <p>
        My name is Camilo Hernandez, I’m a third year Applied Computer
        Science student at UNAD University of Science and Technology in
        Bogota Colombia.
      </p>
      <img src="/assets/images/separatorBlack.png" alt="Blackseparator" />
      <input className="small" type="text" name="namespace" defaultValue="ENTER YOUR NAME*" />
      <input className="small" type="text" name="emailspace" defaultValue="ENTER YOUR EMAIL*" />
      <input className="small" type="text" name="numberspace" defaultValue="PHONE NUMBER*" />
      <input className="big" type="text" name="menssagespace" defaultValue="YOUR MESSAGE*" />
      <button className="button" type="text">SUBMIT</button>
    </div>
  </section>
  <section className="section-footer--two">
    <img src="/assets/images/ic_baseline-double-arrow.png" alt="arrowup" />
    <h1>BACK TO TOP</h1>
    <div className="footer-socialmedia--container">
      <img src="/assets/images/FACEBOOK.png" alt="facebook" />
      <img src="/assets/images/IN.png" alt="LINKEDIN" />
      <img src="/assets/images/Insta.png" alt="instagram" />
      <img src="/assets/images/Gmail.png" alt="gmail" />
    </div>
    <p><strong>@2021 Camilo Hernandez</strong> All Rights Reserved.</p>
  </section>
</footer>

  )
}
