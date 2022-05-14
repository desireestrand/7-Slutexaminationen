import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { clearOrder } from '../actions/airbeanActions';

import droneIcon from '../assets/graphics/drone.svg';
import loaderIcon from '../assets/graphics/loader.png';

function Status() {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);

    const orderResponse = useSelector((state) => { return state.orderResponse });

    useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 3000));
        setLoading((loading) => !loading);
      };

      loadData();
    }, [])
    
    function wipeOrder() {
        dispatch(clearOrder());
    }

    if (loading) {
        return <div className="Status-loader"><img src={ loaderIcon } alt="Airbean Loader Icon"/></div>
    } else {
        return (
            <div className="Status">
                <div className="Status-content"> 
                    <h3>Ordernummer <b>#{orderResponse.orderNr}</b></h3>
                    <img src={ droneIcon } alt="Airbean Drone Icon" className="Status-drone-icon"/>
                    <h1>Din beställning är på väg!</h1>
                    <h2><b>{orderResponse.eta}</b> minuter</h2>
                    <button onClick={ wipeOrder }>
                        <Link to="/menu">Ok, cool!</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Status;