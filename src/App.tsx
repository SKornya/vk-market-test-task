import { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Card, Col, ConfigProvider, Row, Skeleton, theme } from 'antd';
import Title from 'antd/es/typography/Title';

import Goods from './components/Goods';
import Total from './components/Total';

import { fetchGoods } from './utils/fetchGoods';
import { RootState, useAppDispatch } from './store';
import { setError, setLoading } from './model/statusReducer';
import { addGood } from './model/cartReducer';

const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => state.status);
  const { loading, error } = status;

  useEffect(() => {
    const getGoods = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchGoods();
        data.forEach((good) => {
          dispatch(addGood(good));
        });
        dispatch(setLoading(false));
      } catch (error) {
        if (error instanceof Error) {
          dispatch(setError(error.message));
        }
      }
    };

    getGoods();
  }, [dispatch]);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Title level={3}>Корзина</Title>
      {!error ? (
        <Row gutter={20}>
          <Col span={18} style={{ height: '100vh' }}>
            {!loading ? <Goods /> : <Skeleton active />}
          </Col>
          <Col span={6}>
            <Total />
          </Col>
        </Row>
      ) : (
        <Card>{error}</Card>
      )}
    </ConfigProvider>
  );
};

export default App;
