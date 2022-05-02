import airbeanAdd from '../assets/graphics/add.svg';

function MenuItem({ title, desc, price }) {
    return (
        <li className="MenuItem">
            <button><img src={ airbeanAdd } alt="Airbean Add" /></button>
            <h2>{ title }</h2>
            <div className="Line"></div>
            <p>{ desc }</p>
            <h3>{ price } kr</h3>
        </li>
    )
}

export default MenuItem;