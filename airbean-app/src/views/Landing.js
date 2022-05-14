import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import landingLogo from '../assets/graphics/airbean-landing.svg';
import landingGraphicLeft from '../assets/graphics/intro-graphic-left.svg';
import landingGraphicRight from '../assets/graphics/intro-graphic-right.svg';

function Landing() {
    let navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/menu");
        }, 5000);
    }, []);
  
    return (
        <div className="Landing">
            <img src={ landingLogo } alt="Airbean Landing Logo" className="Landing-logo"/>
            <img src={ landingGraphicLeft } alt="Airbean Landing Graphic Left" className="Landing-graphic-left" />
            <img src={ landingGraphicRight } alt="Airbean Landing Graphic Right" className="Landing-graphic-right" />
        </div>
    )
}

export default Landing;