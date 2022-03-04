import separator  from "/src/assets/image/separatorWhite2.png";
import mail from "/src/assets/image/cib_mail-ru.png";
import github from "/src/assets/image/ant-design_github-filled.png";
import linkedin from "/src/assets/image/entypo-social_linkedin-with-circle.png";

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
        <img src="${separator}" alt="separador" class="separador">                
        <div class="banner-img--container">
            <a href="mailto:chernandezcediel@gmail.com"><img src="${mail}" alt="Mail"></a>
            <a href="https://github.com/Cherced"><img src="${github}" alt="GITHUB" class="git"></a>
            <a href="https://linkedin.com/in/cherced"><img src="${linkedin}" alt="LINKEDIN"></a>        
        </div>                    
    </div>
</section>`;
    return view;
}

export default Banner;