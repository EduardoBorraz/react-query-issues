import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const { labelQuery } = useLabels();

  if (labelQuery.isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      {labelQuery.data?.map(({ id, name, color }) => (
        <span
          key={id}
          className="badge rounded-pill m-1 label-picker"
          style={{
            border: `1px solid #${color}`,
            color: `#${color}`,
          }}
        >
          {name}
        </span>
      ))}
    </div>
  );
};
