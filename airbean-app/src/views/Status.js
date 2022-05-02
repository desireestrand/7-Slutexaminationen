import airbeanDrone from '../assets/graphics/drone.svg';
import { Link } from 'react-router-dom';

function Status() {
    return (
        <div className="Status">
            <div className="StatusContent"> 
                <h3>Ordernummer <b>#12DV23F</b></h3>
                <img src={ airbeanDrone } alt="Airbean Drone" className="DroneIcon"/>
                <h1>Din beställning är på väg!</h1>
                <h2><b>13</b> minuter</h2>
                <button><Link to="/menu">Ok, cool!</Link></button>
            </div>
        </div>
    )
}

export default Status;