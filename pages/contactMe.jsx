import React,{useState, useEffect} from 'react'
import { StarterPage } from '../Components/StarterPage'

const contactMe = () => {
  const [starterAnimation, setStarterAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStarterAnimation(false);
    }, 4000);
  }, []);

  return (
    <React.Fragment>
    {
      starterAnimation ? (<StarterPage /> ): (<section className="section-footer--one">
      <div className="footer-contactme--container">
        <div className="titleBox">CONTACT</div>
        <p>
          My name is Camilo Hernandez, I’m a Frontend Developer, Actually learning all about ReactJs, this its another way to be on touch with you, if you have something on i can give you a hand, YOU WELCOME.
        </p>
        <img src="/assets/images/separatorBlack.png" alt="Blackseparator" />
        <input className="small" type="text" name="namespace" defaultValue="ENTER YOUR NAME*" />
        <input className="small" type="text" name="emailspace" defaultValue="ENTER YOUR EMAIL*" />
        <input className="small" type="text" name="numberspace" defaultValue="PHONE NUMBER*" />
        <input className="big" type="text" name="menssagespace" defaultValue="YOUR MESSAGE*" />
        <button className="button" type="text">SUBMIT</button>
      </div>
    </section>)
    }
    </React.Fragment>    
  )
}

export default contactMe;