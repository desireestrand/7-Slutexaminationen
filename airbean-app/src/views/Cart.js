import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddedItem from '../components/AddedItem';
import { getOrderResponse } from '../actions/cartActions';
import airbeanArrow from '../assets/graphics/cart-detail.svg';
import loaderPic from '../assets/graphics/loader.png';

function Cart(props) {
    const dispatch = useDispatch();
    const addedItems = useSelector((state) => { return state.addedItems });
    const orderResponse = useSelector((state) => { return state.orderResponse });
    const total = useSelector((state) => { return state.total });
    console.log('Arrayen:', addedItems);

    const handleOrder = e => {
        const data = { addedItems };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        };
        fetch("http://localhost:5000/api/beans", requestOptions)
          .then(response => response.json())
          .then(res => console.log(dispatch(getOrderResponse(res))))
      };

    if (!props.show) {
        return null
    }

    return (
        <div className="Cart" onClick={props.onClose}>
        <div className="CartArrow"><img src={ airbeanArrow } alt="Cart"/></div>
            <div className="CartContent" onClick={e => e.stopPropagation()}>
            <h1>Din beställning</h1>
            <ul className="OrderItemList">
            { addedItems.map((addeditem) => {
                        return (
                            <AddedItem key={addeditem.id} id={addeditem.id} title={addeditem.title} price={addeditem.price} quantity={addeditem.quantity} />
                        )
                    })}
            </ul>
            <h2>Total {total}</h2>
            <h3>inkl. moms + drönarleverans</h3>

            <button className="acceptButton" onClick={ handleOrder }><Link to="/status">Take my money!</Link></button>
            </div>
        </div>
    )
}

export default Cart;