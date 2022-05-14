const initialState = {
    menu: [],
    addedItems: [],
    total: 0,
    counter: 0,
    orderResponse: [],
    clearOrder: ''
}

const airbeanReducer = (state = initialState, action) => {

    switch(action.type) {
        /* Menu */
        case 'ADD_MENU':
            return {
                ...state,
                menu: action.payload
            }

        /* Order */
        case 'GET_ORDER_RESPONSE':
            return {
                orderResponse: action.payload
            }

        case 'CLEAR_ORDER':
            return {
                ...state,
                menu: [],
                addedItems: [],
                total: 0,
                counter: 0,
                orderResponse: [],
                clearOrder: ''
            }

        /* Cart */
        case 'ADD_TO_CART':
            const addedItem = state.menu.find(menuitem=> menuitem.id === action.id);
            const existedItem = state.addedItems.find(addeditem=> action.id === addeditem.id);

            const bryggkaffe = state.addedItems.filter(kaffe => kaffe.id == 1);
            const bakelse = state.addedItems.filter(bakelse => bakelse.id == 7);
            const bryggkaffeAmount = bryggkaffe.map( (result) => result.quantity);
            const bakelseAmount = bakelse.map( (result) => result.quantity);
            
            if(existedItem) {
                if (action.id == 7 && bakelseAmount >= 1) {
                    bakelseAmount[0] += 1;
                } else if (action.id == 1 && bryggkaffeAmount >= 1) {
                    bryggkaffeAmount[0] += 1;
                }

                addedItem.quantity += 1

                if (action.id === 1 && bakelseAmount[0] >= bryggkaffeAmount[0]) {
                    return {
                        ...state,
                        total: state.total + addedItem.price - 39
                    }
                } else if (action.id === 7 && bryggkaffeAmount[0] >= bakelseAmount[0]) {
                    return {
                        ...state,
                        total: state.total + addedItem.price - 39
                    }
                } else {
                    return {
                        ...state,
                        total: state.total + addedItem.price,
                    }
                }
        
            } else {
                if (action.id == 7 && bakelseAmount <1) {
                    bakelseAmount[0] = 1;
                } else if (action.id == 1 && bryggkaffeAmount <1) {
                    bryggkaffeAmount[0] = 1;
                }

                addedItem.quantity = 1
                const newTotal = state.total + addedItem.price

                if (action.id === 1 && bakelseAmount[0] >= bryggkaffeAmount[0]) {
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total: newTotal - 39
                    }
                } else if (action.id === 7 && bryggkaffeAmount[0] >= bakelseAmount[0]) {
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total: newTotal - 39
                    }
                } else {
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total: newTotal
                    }
                }
            }

        case 'ADD_QUANTITY':
            const addItem = state.menu.find(menuitem=> menuitem.id === action.id);

            const bryggkaffeAdd = state.addedItems.filter(kaffe => kaffe.id == 1);
            const bakelseAdd = state.addedItems.filter(bakelse => bakelse.id == 7);
            const bryggkaffeAddAmount = bryggkaffeAdd.map( (result) => result.quantity);
            const bakelseAddAmount = bakelseAdd.map( (result) => result.quantity);

            if (action.id == 7 && bakelseAddAmount >= 1) {
                bakelseAddAmount[0] += 1;
            } else if (action.id == 1 && bryggkaffeAddAmount >= 1) {
                bryggkaffeAddAmount[0] += 1;
            }

            addItem.quantity += 1

            if (action.id === 1 && bakelseAddAmount[0] >= bryggkaffeAddAmount[0]) {
                return {
                    ...state,
                    total: state.total + addItem.price - 39,
                    counter: state.counter + 1
                }
            } else if (action.id === 7 && bryggkaffeAddAmount[0] >= bakelseAddAmount[0]) {
                return {
                    ...state,
                    total: state.total + addItem.price - 39,
                    counter: state.counter + 1
                }
            } else {
                return {
                    ...state,
                    total: state.total + addItem.price,
                    counter: state.counter + 1
                }
            }

        case 'SUB_QUANTITY':
            const subItem = state.menu.find(menuitem=> menuitem.id === action.id);

            const bryggkaffeSub = state.addedItems.filter(kaffe => kaffe.id == 1);
            const bakelseSub = state.addedItems.filter(bakelse => bakelse.id == 7);
            const bryggkaffeSubAmount = bryggkaffeSub.map( (result) => result.quantity);
            const bakelseSubAmount = bakelseSub.map( (result) => result.quantity);

            if (subItem.quantity === 1) {
                const newItem = state.addedItems.filter(addeditem=>addeditem.id !== action.id);

                if (action.id == 7 && bakelseSubAmount === 1) {
                    bakelseSubAmount[0] = 0;
                } else if (action.id == 1 && bryggkaffeSubAmount === 1) {
                    bryggkaffeSubAmount[0] = 0;
                }

                if (action.id === 1 && bryggkaffeSubAmount[0] < bakelseSubAmount[0]) {
                    return {
                        ...state,
                        addedItems: newItem,
                        total: state.total - subItem.price + 39,
                        counter: state.counter - 1
                    }
                } else if (action.id === 7 && bakelseSubAmount[0] < bryggkaffeSubAmount[0]) {
                    return {
                        ...state,
                        addedItems: newItem,
                        total: state.total - subItem.price + 39,
                        counter: state.counter - 1
                    }
                } else {
                    return {
                        ...state,
                        addedItems: newItem,
                        total: state.total - subItem.price,
                        counter: state.counter - 1
                    }
                }
                
            } else {
                if (action.id == 7 && bakelseSubAmount >= 1) {
                    bakelseSubAmount[0] -= 1;
                } else if (action.id == 1 && bryggkaffeSubAmount >= 1) {
                    bryggkaffeSubAmount[0] -= 1;
                }

                subItem.quantity -= 1

                if (action.id === 1 && bryggkaffeSubAmount[0] < bakelseSubAmount[0]) {
                    return {
                        ...state,
                        total: state.total - subItem.price + 39,
                        counter: state.counter - 1
                    }
                } else if (action.id === 7 && bakelseSubAmount[0] < bryggkaffeSubAmount[0]) {
                    return {
                        ...state,
                        total: state.total - subItem.price + 39,
                        counter: state.counter - 1
                    }
                } else {
                    return {
                        ...state,
                        total: state.total - subItem.price,
                        counter: state.counter - 1
                    }
                }
            }
        
        case 'COUNT':
            return {
                ...state,
                counter: state.counter + action.payload
            }
        
        default:
            return state;
    }
}


export default airbeanReducer;