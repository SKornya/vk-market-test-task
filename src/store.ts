import { useDispatch } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { cartReducer } from './model/cartReducer';
import { statusReducer } from './model/statusReducer';

const reducer = combineReducers({
  cart: cartReducer,
  status: statusReducer,
});

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = () =>
  useDispatch<AppDispatch>();

export default store;
