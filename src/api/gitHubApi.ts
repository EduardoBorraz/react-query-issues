import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
