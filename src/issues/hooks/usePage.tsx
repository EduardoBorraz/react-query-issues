interface Props {
  data: any;
  page?: number;
}

export default function usePage({ data, page = 1 }: Props) {
  const nextPage = (): number | undefined => {
    if (data?.length === 0) return;
    return page + 1;
    //setPage(page + 1);
  };

  const prevPage = (): number | undefined => {
    if (page === 1) return;
    return page - 1;
    //setPage(page - 1);
  };

  return { nextPage, prevPage };
}
