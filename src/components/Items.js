import Cards from './Cards';
import { useEffect, useState } from 'react';
import { request } from './config/axios';

const Items = () => {
  const [data, setData] = useState();

  const getItems = async () => {
    await request
      .get('/boards/items')
      .then((res) => {
        console.log(res.data);
        setData((state) => res.data);
      })
      .then(console.log(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className="Items">
      {data && data.map((it) => <Cards key={it.postId} {...it} />)}
    </div>
  );
};

export default Items;
