import { QueryClient, useQuery as reactQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();
const queryKeyMap = new Map();

const useQuery = <T extends Record<string, any>, R>(
  queryFn: (...args: T[]) => Promise<R>,
  options?: { variables?: T }
) => {
  return reactQuery({
    queryKey: [
      ...queryKeyMap.get(queryFn),
      ...Object.values(options?.variables ?? {}),
    ],
    queryFn: () =>
      options?.variables ? queryFn(options?.variables) : queryFn(),
    staleTime: 0,
  });
};

export { queryClient, queryKeyMap, useQuery };
