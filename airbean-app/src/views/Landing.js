import airbeanLandingIcon from '../assets/graphics/airbean-landing.svg';
import airbeanLandingGraphicLeft from '../assets/graphics/intro-graphic-left.svg';
import airbeanLandingGraphicRight from '../assets/graphics/intro-graphic-right.svg';

function Landing() {
  
    return (
        <div className="Landing">
            <div className="Landing-content"> 
                <img src={ airbeanLandingIcon } alt="Airbean Landing animation" class="LandingIcon"/>
                <img src={ airbeanLandingGraphicLeft } alt="Airbean Landing graphic left" />
                <img src={ airbeanLandingGraphicRight } alt="Airbean Landing graphic right" class="LandingGraphicRight" />
            </div>
        </div>
    )
}

export default Landing;