import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/gitHubApi";
import { Issue } from "../interfaces";

const getIssues = async (): Promise<Issue[]> => {
  const { data } = await githubApi.get("/issues");
  return data;
};

export default function useIssues() {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
  });

  return { issuesQuery };
}
