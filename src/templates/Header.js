import brand from "/src/assets/image/brand.png";
import btn_menu from "/src/assets/image/Navbar.png";
import brandIntro from "/src/assets/image/brandIntro.png";

const Header = () => {
  const view = `
    <nav class="menu">
        <span class="logo"  onclick="showResume()"><img src="${brand}" alt="brand"></span>
        <div id="resume" class="resume">
          <img src="${brandIntro}" alt="brandIntro" />
          <p>
            I am a professional in business administration, the last 8 years of
            my life I have worked in all operational areas of a corporation,
            leading a company of civil projects, there I learned about
            programming, and I fell in love with the whole beautiful world
            computer science, so I am looking for an opportunity to demonstrate
            my capabilities and take my talents to another level, I believe in
            continuous learning as the most important added value of my profile,
            thanks for reading.
          </p>
          <a href="https://www.youtube.com/watch?v=2Z603ccaj74"><button class="button" type="text">MORE</button></a>
        </div>
        <ul class="menu_items" id="otroModo">
            <li><a class="active" href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contáctenos</a></li>
        </ul>
        <span class="btn_menu" onclick="showMenu()">
            <img src="${btn_menu}" alt="Nav">
        </span>
    </nav>
    `;
  return view;
};

export default Header;
