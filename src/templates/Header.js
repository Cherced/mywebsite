const Header = () => {
  const view = `
    <nav class="menu">
        <label class="logo"><img src="./galery/Icons/brand.png" alt="brand"></label>
        <ul class="menu_items">
            <li><a class="active" href="#">Servicios</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contáctenos</a></li>
        </ul>
        <span class="btn_menu">
            <i class="fas fa-bars"> <img src="./galery/Icons/Navbar.png" alt="Nav"></i>
        </span>
    </nav>
    `;
  return view;
};

export default Header;