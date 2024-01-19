import { Link, useNavigate, useParams } from "react-router-dom";
import { IssueComment } from "../components/IssueComment";
import useIssue from "../hooks/useIssue";
import Loading from "../../shared/components/Loading";

export const IssueView = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { id = 0 } = params;

  const { issueQuery, commentsQuery } = useIssue(+id);

  if (issueQuery.isLoading) return <Loading />;
  if (!issueQuery.data) return navigate("/issues/list");

  return (
    <div className="row mb-5">
      <div className="col-12 mb-3">
        <Link to="./issues/list">Go Back</Link>
      </div>

      {/* Primer comentario */}
      <IssueComment isssue={issueQuery.data} />

      {/* Comentario de otros */}
      {commentsQuery.isLoading && <Loading />}
      {commentsQuery.data?.map((comment) => (
        <IssueComment key={comment.id} isssue={comment} />
      ))}
      {/*  <IssueComment body={comment2} />
      <IssueComment body={comment3} /> */}
    </div>
  );
};
