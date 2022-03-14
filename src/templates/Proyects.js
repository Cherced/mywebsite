import HTML from "../assets/image/Group15.png";
import CSS from "../assets/image/Group16.png";
import SASS  from "../assets/image/Vector.png";
import REACT from "../assets/image/REACT.png";
import VANILLAJS from "../assets/image/VanillaJS.png";

const Proyects = () => {
    const view = `
    <div class="main-skills--tech">
    <div class="titleBox">SKILLS</div>
    <h2 id="unic">USING NOW:</h2>
    <img src="${HTML}" alt="htmlICON" />
    <h1>HTML</h1>
    <img src="${CSS}" alt="CSS3ICON" />
    <h1>CSS3</h1>
    <img src="${SASS}" alt="SASSICON" />
    <h1>SASS</h1>
    <img src="${REACT}" alt="SASSICON" />
    <h1>REACT</h1>
    <img src="${VANILLAJS}" alt="SASSICON" />
    <h1>JAVASCRIPT</h1>
  </div>
    <section class="section-main-three">
    <div class="main-proyect--container">
      <div class="proyect-button--container">
        <div class="titleBox">PORTFOLIO</div>
      </div>
      <div class="proyect-nav--container">
        <ul>
          <li>ALL</li>
          <li>CODED</li>
        </ul>
        <li>DESIGNED</li>
      </div>
      <aside class="proyect-carrusel--container">
        <div class="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button class="button" type="text">DEMO</button>
            <button class="button" type="text">MORE</button>
          </ul>
        </div>
        <div class="boxSample">
          <p>coded, designed</p>
          <h1>LOGOS IT</h1>
          <p>Digital services hosted in Colombia</p>
          <ul>
            <button class="button" type="text">DEMO</button>
            <button class="button" type="text">MORE</button>
          </ul>
        </div>
        <div class="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button class="button" type="text">DEMO</button>
            <button class="button" type="text">MORE</button>
          </ul>
        </div>
        <div class="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button class="button" type="text">DEMO</button>
            <button class="button" type="text">MORE</button>
          </ul>
        </div>
        <div class="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button class="button" type="text">DEMO</button>
            <button class="button" type="text">MORE</button>
          </ul>
        </div>
        <div class="boxSample">
          <p>coded, designed</p>
          <h1>FULL-WEB</h1>
          <p>Landing Page, for a seos Company</p>
          <ul>
            <button class="button" type="text">DEMO</button>
            <button class="button" type="text">MORE</button>
          </ul>
        </div>
        <div class="footer-proyect--container">
          <p>And many more to come!</p>
        </div>
      </aside>
    </div>
  </section>`;
    return view;
};

export default Proyects;