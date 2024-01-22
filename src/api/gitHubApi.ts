import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
