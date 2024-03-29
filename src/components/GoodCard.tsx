import { FunctionComponent } from 'react';

import { Button, Card, Flex, Image, Space } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import ButtonGroup from 'antd/es/button/button-group';

import { useAppDispatch } from '../store';
import { Good, changeGoodQuantity, removeGood } from '../model/cartReducer';

interface GoodCardProps {
  item: Good;
  quantity: number;
}

const GoodCard: FunctionComponent<GoodCardProps> = ({ item, quantity }) => {
  const dispatch = useAppDispatch();
  const { id, title, description, price, image } = item;

  return (
    <Card key={id} style={{ marginBottom: '20px' }}>
      <Flex justify="start">
        <div
          style={{
            width: '150px',
            height: '150px',
            flexShrink: 0,
            marginRight: '20px',
            border: '1px solid black',
            borderRadius: '10px',
            textAlign: 'center',
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          <Image src={image} width="auto" height="100%" preview={false} />
        </div>

        <Flex gap={50} justify="space-between" style={{ width: '100%' }}>
          <Flex
            style={{
              flexDirection: 'column',
            }}
            align="start"
            justify="space-between"
          >
            <Space direction="vertical">
              <Text strong>{title}</Text>
              <Text type="secondary">
                <div
                  style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    maxWidth: '700px',
                    WebkitLineClamp: '2',
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {description}
                </div>
              </Text>
            </Space>

            <Button
              style={{ marginTop: '10px' }}
              size="large"
              onClick={() => {
                dispatch(removeGood(id));
              }}
            >
              <DeleteOutlined />
            </Button>
          </Flex>

          <Space direction="vertical" style={{ width: '100px' }}>
            <Title style={{ textAlign: 'center' }} level={5}>
              {parseFloat((price * quantity).toFixed(2))} {'\u0024'}
            </Title>

            <ButtonGroup size="small">
              <Button
                onClick={() => {
                  dispatch(changeGoodQuantity({ id, value: -1 }));
                }}
              >
                <MinusOutlined style={{ fontSize: '16px' }} />
              </Button>

              <Button
                disabled
                style={{
                  cursor: 'default',
                  color: '#fff',
                  backgroundColor: 'transparent',
                }}
              >
                {quantity}
              </Button>

              <Button
                onClick={() => {
                  dispatch(changeGoodQuantity({ id, value: 1 }));
                }}
              >
                <PlusOutlined style={{ fontSize: '16px' }} />
              </Button>
            </ButtonGroup>
          </Space>
        </Flex>
      </Flex>
    </Card>
  );
};

export default GoodCard;
