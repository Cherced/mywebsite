import brand from "/src/assets/image/brand.png";
import btn_menu from "/src/assets/image/Navbar.png";

const Header = () => {
  const view = `
    <nav class="menu">
        <label class="logo"><img src="${brand}" alt="brand"></label>
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
