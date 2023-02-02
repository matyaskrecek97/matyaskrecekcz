import { ROUTES } from '@/constants/routes';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';
import { Quote, QuoteAPIResponse } from './quote';

const useQuote = () => {
  const { data, isLoading, error } = useSWR<QuoteAPIResponse>(
    ROUTES.API.EXTERNAL.THEYSAIDSO,
    fetcher,
    { refreshInterval: 1000 * 60 * 60 * 24 }
  );

  if (error) console.error(error);

  const formatedData: Quote | undefined = data && {
    text: data?.contents.quotes[0].quote,
    author: data?.contents.quotes[0].author,
  };

  return {
    quote: formatedData,
    isLoading,
    error,
  };
};

export default useQuote;
