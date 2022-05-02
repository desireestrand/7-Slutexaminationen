import { Link } from 'react-router-dom';

function Cart(props) {
    if (!props.show) {
        return null
    }

    return (
        <div className="Cart" onClick={props.onClose}>
            <div className="CartArrow"></div>
            <div className="CartContent" onClick={e => e.stopPropagation()}>
            <h1>Din beställning</h1>
            <ul className="OrderItemList">

            </ul>
            <h2>Total</h2>
            <h3>inkl. moms + drönarleverans</h3>

            <button><Link to="/status">Take my money!</Link></button>
            </div>
        </div>
    )
}

export default Cart;