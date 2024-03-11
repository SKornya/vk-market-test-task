import { createStore } from 'redux';

export interface Good {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Cart {
  goods: {
    item: Good;
    quantity: number;
  }[];
  totalPrice: number;
}

const ADD_GOOD = 'ADD_GOOD';
// const INCREMENT_GOOD_QUANTITY = 'INCREMENT_GOOD_QUANTITY';
// const DECREMENT_GOOD_QUANTITY = 'DECREMENT_GOOD_QUANTITY';
const CHANGE_GOOD_QUANTITY = 'CHANGE_GOOD_QUANTITY';
const REMOVE_GOOD = 'REMOVE_GOOD';

interface AddGoodAction {
  type: 'ADD_GOOD';
  payload: Good;
}

// interface IncremetGoodQuantity {
//   type: 'INCREMENT_GOOD_QUANTITY';
//   payload: number;
// }

// interface DecremetGoodQuantity {
//   type: 'DECREMENT_GOOD_QUANTITY';
//   payload: number;
// }

interface ChangeGoodQuantity {
  type: 'CHANGE_GOOD_QUANTITY';
  payload: { id: number; value: number };
}

interface RemoveGood {
  type: 'REMOVE_GOOD';
  payload: number;
}

type CartAction =
  | AddGoodAction
  // | IncremetGoodQuantity
  // | DecremetGoodQuantity
  | ChangeGoodQuantity
  | RemoveGood;

const initialState: Cart = {
  goods: [],
  totalPrice: 0,
};

const reducer = (state: Cart = initialState, action: CartAction): Cart => {
  switch (action.type) {
    case ADD_GOOD:
      return {
        goods: [...state.goods, { item: action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case CHANGE_GOOD_QUANTITY: {
      const { id, value } = action.payload;
      const good = state.goods.find((good) => good.item.id === id);
      if (good) {
        good.quantity += value;
      }
      return {
        ...state,
        totalPrice: state.totalPrice + (good?.item.price ?? 0) * value,
      };
    }
    case REMOVE_GOOD: {
      const removableGood = state.goods.find(
        (good) => good.item.id === action.payload
      );
      const filteredGoods = state.goods.filter(
        (good) => good.item.id !== removableGood?.item.id
      );
      return {
        goods: filteredGoods,
        totalPrice:
          state.totalPrice -
          (removableGood?.quantity ?? 0) * (removableGood?.item.price ?? 0),
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>;

export default store;
