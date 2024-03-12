import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import GoodCard from './GoodCard';

import { RootState } from '../store';

const Goods: FunctionComponent = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { goods } = cart;

  return (
    <>
      {goods.map(({ item, quantity }) => {
        return (
          <GoodCard item={item} quantity={quantity} />
        );
      })}
    </>
  );
};

export default Goods;
