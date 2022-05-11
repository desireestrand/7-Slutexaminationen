import airbeanAdd from '../assets/graphics/add.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, countItem } from '../actions/cartActions';

function MenuItem({ id, title, desc, price }) {
    const dispatch = useDispatch();

    function handleClick(id) {
        console.log(id);
        dispatch(addToCart(id));
        dispatch(countItem(1));
    }

    return (
        <li className="MenuItem">
            <button onClick={()=>{handleClick(id)}}><img src={ airbeanAdd } alt="Airbean Add" /></button>
            <h2>{ title }</h2>
            <div className="Line"></div>
            <p>{ desc }</p>
            <h3>{ price } kr</h3>
        </li>
    )
}

export default MenuItem;