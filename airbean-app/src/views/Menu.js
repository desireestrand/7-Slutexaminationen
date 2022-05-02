import { useState, useEffect } from 'react';
import airbeanHeader from '../assets/graphics/graphics-header.svg';
import airbeanFooter from '../assets/graphics/graphics-footer.svg';
import airbeanCart from '../assets/graphics/bag.svg';

import MenuItem from '../components/MenuItem';
import Cart from '../views/Cart';

function Menu() {
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        async function getMenu() {
        const respone = await fetch('http://localhost:5000/api/beans');
        const data = await respone.json();
        console.log(data);

        setMenu(data.menu);
        }

        getMenu();
    }, []);

    return (
        <div className="Menu">
            <img src={ airbeanHeader } alt="Airbean Header" className="Header"/>
            <button className="CartButton" onClick={() => setShow(true)}><img src={ airbeanCart } alt="Cart" /></button>
            <p className="CartNumber">0</p>
            <Cart onClose={() => setShow(false)} show={show}/>
             <div className="MenuContent"> 
                <h1>Meny</h1>
                <ul className="MenuItemList">
                    { menu.map((menuitem) => {
                        return (
                            <MenuItem key={menuitem.id} title={menuitem.title} desc={menuitem.desc} price={menuitem.price} />
                        )
                    })}
                </ul>
            </div>
            <img src={ airbeanFooter } alt="Airbean Footer"  className="Footer"/>
        </div>
    )
}

export default Menu;