import airbeanDrone from '../assets/graphics/drone.svg';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearOrder } from '../actions/cartActions';

function Status() {
    const dispatch = useDispatch();
    const orderResponse = useSelector((state) => { return state.orderResponse });
    
    function wipeOrder() {
        dispatch(clearOrder());
    }

    return (
        <div className="Status">
            <div className="StatusContent"> 
                <h3>Ordernummer <b>{orderResponse.orderNr}</b></h3>
                <img src={ airbeanDrone } alt="Airbean Drone" className="DroneIcon"/>
                <h1>Din beställning är på väg!</h1>
                <h2><b>{orderResponse.eta}</b> minuter</h2>
                <button onClick={ wipeOrder }><Link to="/menu">Ok, cool!</Link></button>
            </div>
        </div>
    )
}

export default Status;