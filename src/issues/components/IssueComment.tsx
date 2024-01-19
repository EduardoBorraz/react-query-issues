import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { Issue } from "../interfaces";

interface Props {
  isssue: Issue;
}

export const IssueComment: FC<Props> = ({
  isssue: {
    body,
    user: { avatar_url, login },
  },
}) => {
  return (
    <div className="col-12">
      <div className="card border-white mt-2">
        <div className="card-header bg-dark">
          <img src={avatar_url} alt="User Avatar" className="avatar" />
          <span className="mx-2">{login} commented</span>
        </div>
        <div className="card-body text-dark">
          <ReactMarkdown>{body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
