import useSources from "../hooks/useSources";

const SourcesList = () => {
  const { data } = useSources();
  return (
    <ul>
      {data.map((source) => (
        <li key={source.id}>{source.name}</li>
      ))}
    </ul>
  );
};

export default SourcesList;
