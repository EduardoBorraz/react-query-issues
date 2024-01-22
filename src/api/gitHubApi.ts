import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
