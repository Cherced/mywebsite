const Banner = () => {
    const view = `
    <section class="section-main--one">
    <div class="main-banner--container">                
        <div class="banner-text--containerOne">
            <h2>my Name is Camilo</h2>
            <h1>I’M A DEVELOPER</h1>
        </div>
        <div class="banner-text--containerTwo">
            <h2>Hi, I am</h2>
            <h1>Camilo Hernandez</h1>
            <p>Front-end Developer / Business Manager</p>
        </div>
        <img src="./galery/Icons/separatorWhite 2.png" alt="separador" class="separador">                
        <div class="banner-img--container">
            <img src="./galery/Icons/cib_mail-ru.png" alt="Mail">
            <img src="./galery/Icons/ant-design_github-filled.png" alt="GITHUB" class="git">
            <img src="./galery/Icons/entypo-social_linkedin-with-circle.png" alt="LINKEDIN">
        </div>                    
    </div>
</section>`;
    return view;
}

export default Banner;