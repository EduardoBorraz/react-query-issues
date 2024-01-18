import { useState } from "react";
import { IssueList } from "../components/IssueList";
import { LabelPicker } from "../components/LabelPicker";

export const ListView = () => {
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);

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
        <IssueList />
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
