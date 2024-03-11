import { Card, Col, ConfigProvider, Grid, Layout, Row, theme } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import Goods from './components/Goods';
import Total from './components/Total';

import { fetchGoods } from '../utils/fetchGoods';
// import './App.css';

const App: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const getGoods = async () => {
      try {
        const data = await fetchGoods();
        
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Row>
        <Col flex={3}>
          <Goods />
        </Col>
        <Col flex={1}>
          <Total />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default App;
