import airbeanLandingIcon from '../assets/graphics/airbean-landing.svg';
import airbeanLandingGraphicLeft from '../assets/graphics/intro-graphic-left.svg';
import airbeanLandingGraphicRight from '../assets/graphics/intro-graphic-right.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Landing() {
    let navigate = useNavigate();
    useEffect(() => {
    setTimeout(() => {
        navigate("/menu");
    }, 5000);
    }, []);
  
    return (
        <div className="Landing">
            <div className="Landing-content"> 
                <img src={ airbeanLandingIcon } alt="Airbean Landing animation" className="LandingIcon"/>
                <img src={ airbeanLandingGraphicLeft } alt="Airbean Landing graphic left" />
                <img src={ airbeanLandingGraphicRight } alt="Airbean Landing graphic right" className="LandingGraphicRight" />
            </div>
        </div>
    )
}

export default Landing;