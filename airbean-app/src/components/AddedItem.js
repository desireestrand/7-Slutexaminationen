import { useDispatch } from 'react-redux';

import { addQuantity, subtractQuantity } from '../actions/airbeanActions';

import addItemIcon from '../assets/graphics/arrow-up.svg';
import subItemIcon from '../assets/graphics/arrow-down.svg';

function AddedItem({ id, title, price, quantity }) {
    const dispatch = useDispatch();

    function addIt(id) {
        dispatch(addQuantity(id));
    }

    function subtractIt(id) {
        dispatch(subtractQuantity(id));
    }

    return (
        <li className="AddedItem">
            <h2>{ title }</h2>
            <div className="Cart-line"></div>
            <h3>{ price * quantity } kr</h3>
            <p>{quantity}</p>
            <div className="Cart-add-remove">
                <button className="Cart-add" onClick={()=>{addIt(id)}}>
                    <img className="add" src={ addItemIcon } alt="Airbean Add Icon"/>
                </button>
                <button className="Cart-remove" onClick={()=>{subtractIt(id)}}>
                    <img className="remove" src={ subItemIcon } alt="Airbean Remove Icon"/>
                </button>
            </div>
        </li>
    )
}

export default AddedItem;