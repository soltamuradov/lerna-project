import { useState } from 'react';
import { useQuery } from 'react-query';
import { Button } from 'shared';
import getProducts from 'sdk-request_tashu'
import { IProduct } from 'app/store';

export const QuestionsReact = () => {
  const [page, setPage] = useState(0);

  const { data } = useQuery(['react', page], () => getProducts({ page }));

  console.log(getProducts);
  

  const products:IProduct[] = data ? data.products : [];

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {products.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>

      <Button onClick={() => setPage((prev) => prev + 1)}>еще</Button>
    </div>
  );
};
