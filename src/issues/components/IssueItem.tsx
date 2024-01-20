import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { Issue } from "../interfaces";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getIssueComments, getIssueInfo } from "../hooks/useIssue";
import { timeSince } from "../../helpers/time-since";

interface Props {
  issue: Issue;
}

export const IssueItem = ({ issue: fullIssue }: Props) => {
  const {
    title,
    number,
    state,
    comments,
    labels,
    created_at,
    user: { login, avatar_url },
  } = fullIssue;

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const prefetchData = () => {
    queryClient.prefetchQuery({
      queryKey: ["issue", number],
      queryFn: () => getIssueInfo(number),
    });
    queryClient.prefetchQuery({
      queryKey: ["issue", number, "comments"],
      queryFn: () => getIssueComments(number),
    });
  };

  const preSetData = () => {
    queryClient.setQueryData(["issue", number], fullIssue);
  };

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${number}`)}
      //onMouseEnter={prefetchData}
      //onMouseEnter={preSetData}
    >
      <div className="card-body d-flex align-items-center">
        {/* <FiCheckCircle size={30} color="green" /> */}
        {state === "open" ? (
          <FiInfo size={30} color="red" />
        ) : (
          <FiCheckCircle size={30} color="green" />
        )}

        <div className="d-flex flex-column flex-fill px-2">
          <span>{title}</span>
          <span className="issue-subinfo">
            #{number} opened {timeSince(created_at)}{" "}
            <span className="fw-bold">{login}</span>
          </span>
          <div>
            {labels.map((label) => (
              <span
                key={label.id}
                className="badge rounded-pill m-1"
                style={{
                  border: `1px solid #${label.color}`,
                  color: `#${label.color}`,
                  fontWeight: "900",
                }}
              >
                {label.name}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex align-items-center">
          <img src={avatar_url} alt="User Avatar" className="avatar" />
          <span className="px-2">{comments}</span>
          <FiMessageSquare />
        </div>
      </div>
    </div>
  );
};
