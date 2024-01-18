import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
