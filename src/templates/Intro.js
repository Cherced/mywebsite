import separator from "/src/assets/image/separatorBlack.png";
import desingIcon from "/src/assets/image/Desing.png";
import devIcon from "/src/assets/image/dev.png";
import maintenanceIcon from "/src/assets/image/maintenance.png";

const Intro = () => {
  const view = `
    <section class="section-main--two">
          <div class="titleBox">ABOUT ME</div>
          <p>
            My name is Camilo Hernandez, I'm a third year Applied Computer
            Science student at the UNAD University of Science and Technology in
            Bogota Colombia. I have been learning Front-End technologies for a
            year and this time was just enough for me to make sure that this is
            my place in the industry.
          </p>
          <br />
          <p>
            Membership in the plataform PLATZI, developed my design skills,
            which quickly turned into a new hobby. I am fluent in English
            (spoken and written) and native Spanish. Apart from designing and
            programming websites, my passion is all kinds of motorsport, also
            fitness life style, life is an adventure and I want to enjoy it.
          </p>
          <button class="button" type="text">EXPLORE</button>
          <img src="${separator}" alt="separatorBlack" />
          <div class="main-skills--container">
          <div class="box-model one">
          <img src="${desingIcon}" alt="desingIcon" />
          <h1>DESING</h1>
          <p>
            I can design the website based on your needs and suggestions. I
            can also create it from scratch by consulting with you during
            work.
          </p>
        </div>
        <div class="box-model two">
          <img src="${devIcon}" alt="dev" />
          <h1>DEVELOPEMENT</h1>
          <p>
            Based on a project created by me (or any another one provided by
            you), I can code the website to be fully functional and
            responsive.
          </p>
        </div>
        <div class="box-model three">
          <img src="${maintenanceIcon}" alt="MantIcon" />
          <h1>MAINTENANCE</h1>
          <p>
            I will look after your website, and in case of problems or the
            need for changes, I can introduce new functionalities and
            solutions.
          </p>
        </div>
          </div>
        </section>`;
  return view;
};
export default Intro;
