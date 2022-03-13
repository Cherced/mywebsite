import Header from "../templates/Header";
import Home from "../pages/Home";
import Banner from "../templates/Banner";
import Community from "../templates/Community";
import Intro from "../templates/Intro";
import Proyects from "../templates/Proyects";

const routes = {
    "/": Home,
}

const router = async () => {
    const header = null || document.getElementById("header");
    const banner = null || document.getElementById("banner");
    const community = null || document.getElementById("community");
    const intro = null || document.getElementById("intro");
    const proyects = null || document.getElementById("proyects");
    header.innerHTML = await Header();
    banner.innerHTML = await Banner();
    community.innerHTML = await Community();
    intro.innerHTML = await Intro();
    proyects.innerHTML = await Proyects();
    
}

export default router;
