import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getOrderResponse } from '../actions/airbeanActions';

import AddedItem from '../components/AddedItem';

import cartIcon from '../assets/graphics/bag.svg';
import cartDetail from '../assets/graphics/cart-detail.svg';

function Cart(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addedItems = useSelector((state) => { return state.addedItems });
    const total = useSelector((state) => { return state.total });
    const count = useSelector((state) => { return state.counter });

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
        <div className="Cart" onClick={() => navigate('/menu')}>
            <div className="Cart" onClick={props.onClose}>
                <button className="Cart-button" onClick={() => navigate('/menu')}>
                    <img src={ cartIcon } alt="Airbean Cart Icon"/>
                </button>
                <p className="Cart-amount">{ count }</p>
                <div className="Cart-detail"><img src={ cartDetail } alt="Airbean Cart Detail"/></div>

                <div className="Cart-content" onClick={e => e.stopPropagation()}>
                    <h1>Din beställning</h1>
                        <ul className="AddedItem-list">
                            { addedItems.map((addeditem) => {
                                        return (
                                            <AddedItem key={addeditem.id} id={addeditem.id} title={addeditem.title} price={addeditem.price} quantity={addeditem.quantity} />
                                        )
                                    })}
                        </ul>
                    <h2 className="Cart-total-title">Total</h2>
                    <div className="Cart-total-line"></div>
                    <h2 className="Cart-total">{total} kr</h2>
                    <h3 className="Cart-total-extra">inkl. moms + drönarleverans</h3>

                    <button className="Order-button" onClick={ handleOrder }>
                        <Link to="/status">Take my money!</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart;