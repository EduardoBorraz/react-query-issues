import { useInfiniteQuery } from "@tanstack/react-query";
import { sleep } from "../../helpers/sleep";
import { Issue } from "../interfaces";
import { githubApi } from "../../api/gitHubApi";

interface Props {
  state?: string;
  labels: string[];
  page?: number;
}

interface QueryProps {
  pageParam?: number;
  queryKey: (string | Props)[];
}

const getIssues = async ({
  pageParam = 1,
  queryKey,
}: QueryProps): Promise<Issue[]> => {
  const [, , args] = queryKey;
  const { state, labels } = args as Props;

  await sleep(2);

  const params = new URLSearchParams();
  if (state) {
    params.append("state", state);
  }
  if (labels.length > 0) {
    params.append("labels", labels.join(","));
  }

  params.append("page", pageParam?.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get("/issues", { params });
  return data;
};

export default function useIssueInfinite({ state, labels }: Props) {
  const issuesQuery = useInfiniteQuery({
    queryKey: ["issues", "infinite", { state, labels, page: 1 }],
    queryFn: (data) => getIssues(data),
    getNextPageParam: () => {
      return null;
    },
    getPreviousPageParam: () => {
      return null;
    },
    initialPageParam: undefined,
  });

  return { issuesQuery };
}
