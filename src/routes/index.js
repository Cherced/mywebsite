import Header from "../templates/Header";
import Home from "../pages/Home";
import Banner from "../templates/Banner";
import Community from "../templates/Community";

const routes = {
    "/": Home,
}

const router = async () => {
    const header = null || document.getElementById("header");
    const banner = null || document.getElementById("banner");
    const anime = null || document.getElementById("community");
    header.innerHTML = await Header();
    banner.innerHTML = await Banner();
    community.innerHTML = await Community();
    
}

export default router;
