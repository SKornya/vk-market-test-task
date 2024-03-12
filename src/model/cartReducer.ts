export interface Good {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface Cart {
  goods: {
    item: Good;
    quantity: number;
  }[];
  totalPrice: number;
}

const ADD_GOOD = 'ADD_GOOD';
const CHANGE_GOOD_QUANTITY = 'CHANGE_GOOD_QUANTITY';
const REMOVE_GOOD = 'REMOVE_GOOD';

interface AddGoodAction {
  type: 'ADD_GOOD';
  payload: Good;
}

interface ChangeGoodQuantityAction {
  type: 'CHANGE_GOOD_QUANTITY';
  payload: { id: number; value: number };
}

interface RemoveGoodAction {
  type: 'REMOVE_GOOD';
  payload: number;
}

const addGood = (good: Good): AddGoodAction => ({
  type: ADD_GOOD,
  payload: good,
});

const changeGoodQuantity = ({
  id,
  value,
}: {
  id: number;
  value: number;
}): ChangeGoodQuantityAction => ({
  type: CHANGE_GOOD_QUANTITY,
  payload: { id, value },
});

const removeGood = (id: number): RemoveGoodAction => ({
  type: REMOVE_GOOD,
  payload: id,
});

type CartAction = AddGoodAction | ChangeGoodQuantityAction | RemoveGoodAction;

const initialCartState: Cart = {
  goods: [],
  totalPrice: 0,
};

const cartReducer = (
  state: Cart = initialCartState,
  action: CartAction
): Cart => {
  switch (action.type) {
    case ADD_GOOD: {
      const isGoodExist = state.goods.find(
        (good) => good.item.id === action.payload.id
      );
      return {
        goods: !isGoodExist
          ? [...state.goods, { item: action.payload, quantity: 1 }]
          : state.goods,
        totalPrice: parseFloat(
          (state.totalPrice + action.payload.price).toFixed(2)
        ),
      };
    }
    case CHANGE_GOOD_QUANTITY: {
      const { id, value } = action.payload;
      const good = state.goods.find((good) => good.item.id === id);

      if (good) {
        let newQuantity = good.quantity + value;
        newQuantity = Math.min(Math.max(1, newQuantity), 10);

        if (newQuantity === good.quantity) {
          return state;
        }

        good.quantity = newQuantity;
      }

      return {
        ...state,
        totalPrice: parseFloat(
          (state.totalPrice + (good?.item.price ?? 0) * value).toFixed(2)
        ),
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
        totalPrice: parseFloat(
          (
            state.totalPrice -
            (removableGood?.quantity ?? 0) * (removableGood?.item.price ?? 0)
          ).toFixed(2)
        ),
      };
    }
    default:
      return state;
  }
};

export { cartReducer, addGood, changeGoodQuantity, removeGood };
