import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'antd';
import Text from 'antd/es/typography/Text';

import { RootState } from '../store';

const Total: FunctionComponent = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const { totalPrice } = cart;

  return (
    <Button size="large" type="primary" style={{ width: '100%' }}>
      <Text strong>
        Итого: {totalPrice} {'\u0024'}
      </Text>
    </Button>
  );
};

export default Total;
