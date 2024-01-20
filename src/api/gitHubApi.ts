import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
