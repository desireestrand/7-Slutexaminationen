import addItemIcon from '../assets/graphics/arrow-up.svg';
import subItemIcon from '../assets/graphics/arrow-down.svg';
import { useDispatch } from 'react-redux';
import { addQuantity, subtractQuantity } from '../actions/cartActions';

function AddedItem({ id, title, price, quantity }) {
    const dispatch = useDispatch();

    function addIt(id) {
        dispatch(addQuantity(id));
        console.log('add');
    }

    function subtractIt(id) {
        dispatch(subtractQuantity(id));
        console.log('sub');
    }

    return (
        <li className="MenuItem">
            <h2>{ title }</h2>
            <div className="Line"></div>
            <h3>{ price * quantity } kr</h3>
            <p>{quantity}</p>
            <div className="add-remove">
                <button className="upArrow" onClick={()=>{addIt(id)}}>
                    <img src={ addItemIcon } alt="Airbean Drone"/>
                </button>
                <button className="downArrow" onClick={()=>{subtractIt(id)}}>
                    <img src={ subItemIcon } alt="Airbean Drone"/>
                </button>
            </div>
        </li>
    )
}

export default AddedItem;