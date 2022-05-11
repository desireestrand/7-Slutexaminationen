import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import airbeanHeader from '../assets/graphics/graphics-header.svg';
import airbeanFooter from '../assets/graphics/graphics-footer.svg';
import airbeanCart from '../assets/graphics/bag.svg';

import MenuItem from '../components/MenuItem';
import Cart from '../views/Cart';

import { addMenu } from '../actions/cartActions';

function Menu() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const menu = useSelector((state) => { return state.menu });
    const addedItems = useSelector((state) => { return state.addedItems });
    const total = useSelector((state) => { return state.total });
    const count = useSelector((state) => { return state.counter });
    console.log(count);
    // const [menu, setMenu] = useState([]);
    let location = useLocation();

    useEffect(() => {
        async function getMenu() {
        const respone = await fetch('http://localhost:5000/api/beans');
        const data = await respone.json();
        console.log(data);

        dispatch(addMenu(data.menu));
        // setMenu(data.menu);
        }

        getMenu();
    }, []);

    return (
        <div className="Menu">
            <img src={ airbeanHeader } alt="Airbean Header" className="Header"/>
            <button className="CartButton"><Link to={{ pathname: '/cart', state: { background: location }}}><img src={ airbeanCart } alt="Cart" /></Link></button>
            <p className="CartNumber">{ count }</p>
            {/* <Cart onClose={() => setShow(false)} show={show} total={total}/> */}
             <div className="MenuContent"> 
                <h1>Meny</h1>
                <ul className="MenuItemList">
                    { menu.map((menuitem) => {
                        return (
                            <MenuItem key={menuitem.id} id={menuitem.id} title={menuitem.title} desc={menuitem.desc} price={menuitem.price} />
                        )
                    })}
                </ul>
            </div>
            <img src={ airbeanFooter } alt="Airbean Footer"  className="Footer"/>
        </div>
    )
}

export default Menu;