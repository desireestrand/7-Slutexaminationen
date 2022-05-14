import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { addMenu } from '../actions/airbeanActions';

import MenuItem from '../components/MenuItem';
import Cart from '../views/Cart';

import header from '../assets/graphics/graphics-header.svg';
import footer from '../assets/graphics/graphics-footer.svg';
import cartIcon from '../assets/graphics/bag.svg';

function Menu() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const menu = useSelector((state) => { return state.menu });
    const count = useSelector((state) => { return state.counter });

    useEffect(() => {
        async function getMenu() {
            const respone = await fetch('http://localhost:5000/api/beans');
            const data = await respone.json();

            dispatch(addMenu(data.menu));
        }
        
        getMenu();
    }, []);
    
    return (
        <div className="Menu">
            <img src={ header } alt="Airbean Menu Header" className="Menu-header"/>

            <Link to="/cart" state={{ background: location }}>
                <button className="Cart-button" onClick={() => setShow(!show)}>
                    <img src={ cartIcon } alt="Cart Icon"/>
                </button>
            </Link>
            <Outlet />
            <p className="Cart-amount">{ count }</p>

            <div className="Cart-wrapper" style={{ display: show ? "block" : "none" }}></div>
            <Cart onClose={() => setShow(false) && navigate(-1)} show={show}/>
            
            <div className="Menu-content"> 
                <h1>Meny</h1>
                    <ul className="MenuItem-list">
                        { menu.map((menuitem) => {
                            return (
                                <MenuItem key={menuitem.id} id={menuitem.id} title={menuitem.title} desc={menuitem.desc} price={menuitem.price} />
                            )
                        })}
                    </ul>
            </div>

            <img src={ footer } alt="Airbean Menu Footer" className="Menu-footer"/>
        </div>
    )
}

export default Menu;