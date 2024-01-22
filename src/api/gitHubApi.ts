import axios from "axios";

export const githubApi = axios.create({
  baseURL: "https://api.github.com/repos/facebook/react",
  headers: {
    Authorization:
      "Bearer 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",
  },
});
