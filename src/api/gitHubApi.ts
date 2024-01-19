import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
