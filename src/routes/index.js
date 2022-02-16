import Header from "../templates/Header";
import Home from "../pages/Home";
import Banner from "../templates/Banner";

const routes = {
    "/": Home,
}

const router = async () => {
    const header = null || document.getElementById("header");
    header.innerHTML = await Header();
}

export default router;
