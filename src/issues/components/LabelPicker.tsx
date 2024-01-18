import { FC } from "react";
import Loading from "../../shared/components/Loading";
import { useLabels } from "../hooks/useLabels";

interface Props {
  selectedLabel: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker = ({ selectedLabel, onChange }: Props) => {
  const { labelQuery } = useLabels();

  if (labelQuery.isLoading) return <Loading />;

  return (
    <div>
      {labelQuery.data?.map(({ id, name, color }) => (
        <span
          key={id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabel.includes(name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${color}`,
            color: `#${color}`,
          }}
          onClick={() => onChange(name)}
        >
          {name}
        </span>
      ))}
    </div>
  );
};
