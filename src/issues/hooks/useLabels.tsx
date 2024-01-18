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
  const labelQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    /* placeholderData: [
      {
        id: 791921801,
        node_id: "MDU6TGFiZWw3OTE5MjE4MDE",
        url: "https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F",
        name: "❤️",
        color: "ffffff",
        default: false,
      },
    ], */
  });
  return { labelQuery };
};
