import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
