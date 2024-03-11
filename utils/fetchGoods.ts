import { Good } from '../src/store';

const DATA_API_URL = 'https://fakestoreapi.com/products?limit=20';

const fetchGoods = async (): Promise<Good[]> => {
  const response = await fetch(DATA_API_URL);

  if (!response.ok) {
    throw Error(`response status is ${response.status}`);
  }

  const data = await response.json();
  return data;
};

export { fetchGoods };
