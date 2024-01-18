import { FiInfo, FiMessageSquare, FiCheckCircle } from "react-icons/fi";
import { Issue } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  issue: Issue;
}

export const IssueItem = ({
  issue: {
    title,
    number,
    state,
    comments,
    user: { login, avatar_url },
  },
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="card mb-2 issue"
      onClick={() => navigate(`/issues/issue/${number}`)}
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
            #{number} opened 2 days ago by{" "}
            <span className="fw-bold">{login}</span>
          </span>
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
