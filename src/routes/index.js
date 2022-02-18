import Header from "../templates/Header";
import Home from "../pages/Home";
import Banner from "../templates/Banner";

const routes = {
    "/": Home,
}

const router = async () => {
    const header = null || document.getElementById("header");
    const banner = null || document.getElementById("banner");
    header.innerHTML = await Header();
    banner.innerHTML = await Banner();
}

export default router;
