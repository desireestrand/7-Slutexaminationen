export const addMenu = (menu) => {
    return {
        type: 'ADD_MENU',
        payload: menu
    }
}

export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        id
    }
}

export const countItem = (count) => {
    return {
        type: 'COUNT',
        payload: count
    }
}

export const addOrder = (order) => {
    return {
        type: 'ADD_ORDER',
        payload: order
    }
}

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