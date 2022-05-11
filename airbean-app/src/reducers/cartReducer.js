const initialState = {
    menu: [],
    addedItems: [],
    total: 0,
    counter: 0,
    orderResponse: [],
    clearOrder: ''
}

const cartReducer = (state = initialState, action) => {
    let addedItem = state.menu.find(menuitem=> menuitem.id === action.id);
    switch(action.type) {
        case 'ADD_MENU':
            return {
                ...state,
                menu: action.payload
            }
            case 'ADD_ORDER':
                return {
                    ...state,
                    order: action.payload
                }
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
                        orderResponse: []
                }
        case 'ADD_TO_CART':
            console.log(action.id);
            console.log(addedItem);
            let existedItem = state.addedItems.find(addeditem=> action.id === addeditem.id);
            console.log('Yep', existedItem);
            if(existedItem)
            {
                addedItem.quantity += 1

                return{
                    ...state,
                    total: state.total + addedItem.price,
                    }
            }
            else {
                addedItem.quantity = 1
                let newTotal = state.total + addedItem.price

                    return{
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total : newTotal
                    }
                }
        case 'ADD_QUANTITY':
            addedItem.quantity += 1
          return{
              ...state,
              total: state.total + addedItem.price,
              counter: state.counter + 1
          }
    case 'SUB_QUANTITY':
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(addeditem=>addeditem.id !== action.id)
            return{
                ...state,
                addedItems: new_items,
                total: state.total - addedItem.price,
                counter: state.counter - 1
            }
        }
        else {
            addedItem.quantity -= 1
            return{
                ...state,
                total: state.total - addedItem.price,
                counter: state.counter - 1
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


export default cartReducer;