import { useQuery } from "@tanstack/react-query";
import { Issue } from "../interfaces";
import { githubApi } from "../../api/gitHubApi";
import { sleep } from "../../helpers/sleep";

const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2);

  const { data } = await githubApi.get(`/issues/${issueNumber}`);
  return data;
};

export default function useIssue(issueNumber: number) {
  const issueQuery = useQuery({
    queryKey: ["issue", issueNumber],
    queryFn: () => getIssueInfo(issueNumber),
  });
  return { issueQuery };
}
