import { useState } from 'react';

export const usePagination = () => {
  const [page, setPage] = useState(1);

  const paginate = (value: number) => {
    setPage(value);
  };

  return { page, paginate };
};
