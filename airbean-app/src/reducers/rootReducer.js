import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

const appReducer = combineReducers({
    cart: cartReducer
  });

  const rootReducer = (state, action) => {
    if (action.type === 'CLEAR_ORDER') {
        return appReducer(undefined, action),
        console.log('YESSSS');
      }
    return appReducer(state, action)
  };

export default rootReducer;