import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/gitHubApi";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi.get("/labels");
  return data;
};

export const useLabels = () => {
  const labelQuery = useQuery({ queryKey: ["labels"], queryFn: getLabels });
  return { labelQuery };
};
