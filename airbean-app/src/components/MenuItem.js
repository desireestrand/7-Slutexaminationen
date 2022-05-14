import { useDispatch } from 'react-redux';

import { addToCart, countCartItem } from '../actions/airbeanActions';

import addIcon from '../assets/graphics/add.svg';

function MenuItem({ id, title, desc, price }) {
    const dispatch = useDispatch();

    function toCart(id) {
        dispatch(addToCart(id));
        dispatch(countCartItem(1));
    }

    return (
        <li className="MenuItem">
            <button onClick={()=>{toCart(id)}}><img src={ addIcon } alt="Airbean Add Icon" /></button>
            <h2>{ title }</h2>
            <div className="MenuItem-line"></div>
            <p>{ desc }</p>
            <h3>{ price } kr</h3>
        </li>
    )
}

export default MenuItem;