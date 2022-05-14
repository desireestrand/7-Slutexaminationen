/* Menu */
export const addMenu = (menu) => {
    return {
        type: 'ADD_MENU',
        payload: menu
    }
}

/* Cart */
export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id
    }
}

export const countCartItem = (count) => {
    return {
        type: 'COUNT',
        payload: count
    }
}

export const addQuantity = (id) => {
    return {
        type: 'ADD_QUANTITY',
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: 'SUB_QUANTITY',
        id
    }
}

/* Order */
export const getOrderResponse = (res) => {
    return {
        type: 'GET_ORDER_RESPONSE',
        payload: res
    }
}

export const clearOrder = () => {
    return {
        type: 'CLEAR_ORDER'
    }
}