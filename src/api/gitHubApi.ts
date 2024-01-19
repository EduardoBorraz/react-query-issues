import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
