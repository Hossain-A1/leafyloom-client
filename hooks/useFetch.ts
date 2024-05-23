import useSWR from "swr";

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) throw new Error("Something went wrong");

  return res.json();
};

const useFetch = (endPoint: string) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endPoint}`,
    fetcher
  );

  const isLoading = !data && !error;
  return { data, isLoading, error };
};

export default useFetch;
