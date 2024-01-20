import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/gitHubApi";
import { Issue } from "../interfaces";
import { sleep } from "../../helpers/sleep";
import { useEffect, useState } from "react";
import usePage from "./usePage";

interface Props {
  state?: string;
  labels: string[];
  page?: number;
}

const getIssues = async ({
  state,
  labels,
  page = 1,
}: Props): Promise<Issue[]> => {
  await sleep(2);

  const params = new URLSearchParams();
  if (state) {
    params.append("state", state);
  }
  if (labels.length > 0) {
    params.append("labels", labels.join(","));
  }

  params.append("page", page?.toString());
  params.append("per_page", "5");

  const { data } = await githubApi.get("/issues", { params });
  return data;
};

export default function useIssues({ state, labels }: Props) {
  const [page, setPage] = useState(1);

  const issuesQuery = useQuery({
    queryKey: ["issues", { state, labels, page }],
    queryFn: () => getIssues({ labels, state, page }),
  });

  const { nextPage, prevPage } = usePage({
    data: issuesQuery.data,
    page,
  });

  const nextDataPage = () => {
    const _nextPage = nextPage();
    if (_nextPage) setPage(_nextPage);
  };

  const prevDataPage = () => {
    const _prevPage = prevPage();
    if (_prevPage) setPage(_prevPage);
  };

  useEffect(() => {
    setPage(1);
  }, [state, labels]);

  return {
    //Props
    issuesQuery,

    //Getters
    page: issuesQuery.isFetching ? "Loading..." : page,

    //Methods
    nextDataPage,
    prevDataPage,
  };
}
