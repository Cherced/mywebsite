import BlackSeparator from '/src/assets/image/separatorBlack.png';
import FACEBOOK from '/src/assets/image/FACEBOOK.png';
import LINKEDIN from '/src/assets/image/IN.png';
import INSTAGRAM from '/src/assets/image/Insta.png';
import GMAIL from '/src/assets/image/Gmail.png';
import ARROWUP from '/src/assets/image/ic_baseline-double-arrow.png'

const Footer = () => {
    const view = `
    <footer>
      <section class="section-footer--one">
        <div class="footer-contactme--container">
          <div class="titleBox">CONTACT</div>
          <p>
            My name is Camilo Hernandez, I’m a third year Applied Computer
            Science student at UNAD University of Science and Technology in
            Bogota Colombia.
          </p>
          <img src="${BlackSeparator}" alt="Blackseparator" />
          <input
            class="small"
            type="text"
            name="namespace"
            value="ENTER YOUR NAME*"
          />
          <input
            class="small"
            type="text"
            name="emailspace"
            value="ENTER YOUR EMAIL*"
          />
          <input
            class="small"
            type="text"
            name="numberspace"
            value="PHONE NUMBER*"
          />
          <input
            class="big"
            type="text"
            name="menssagespace"
            value="YOUR MESSAGE*"
          />
          <button class="button" type="text">SUBMIT</button>
        </div>
      </section>
      <section class="section-footer--two">
        <img src="${ARROWUP}" alt="arrowup" />
        <h1>BACK TO TOP</h1>
        <div class="footer-socialmedia--container">
          <img src="${FACEBOOK}" alt="facebook" />
          <img src="${LINKEDIN}" alt="LINKEDIN" />
          <img src="${INSTAGRAM}" alt="instagram" />
          <img src="${GMAIL}" alt="gmaail" />
        </div>
        <p><strong>@2021 Camilo Hernandez</strong> All Rights Reserved.</p>
      </section>
    </footer>`;
    return view;
}
export default Footer;
