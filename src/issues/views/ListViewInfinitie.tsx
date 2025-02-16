import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";
import useIssues from "../hooks/useIssues";
import Loading from "../../shared/components/Loading";
import useIssueInfinite from "../hooks/useIssueInfinite";

export const ListViewInfinite = () => {
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);
  const [state, setState] = useState<string>();

  const { issuesQuery } = useIssueInfinite({
    state,
    labels: selectedLabel,
  });

  const onLabelChange = (labelName: string) => {
    if (selectedLabel?.includes(labelName)) {
      setSelectedLabel(selectedLabel?.filter((label) => label !== labelName));
    } else {
      setSelectedLabel([...(selectedLabel || []), labelName]);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-8">
        {issuesQuery.isLoading ? (
          <Loading />
        ) : (
          <IssueList
            issues={issuesQuery.data?.pages.flat() || []}
            state={state}
            onStateChange={(newState) => setState(newState)}
          />
        )}

        <button
          className="btn btn-primary mb-3 mt-3"
          disabled={!issuesQuery.hasNextPage}
          onClick={() => issuesQuery.fetchNextPage()}
        >
          {issuesQuery.isFetching ? "Loading..." : "Load More"}
        </button>
      </div>

      <div className="col-4">
        <LabelPicker
          selectedLabel={selectedLabel}
          onChange={(labelName) => onLabelChange(labelName)}
        />
      </div>
    </div>
  );
};
