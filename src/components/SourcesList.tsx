import React from "react";
import useSources from "../hooks/useSources";

const SourcesList = () => {
  const { sources } = useSources();
  return (
    <ul>
      {sources.map((source) => (
        <li key={source.id}>{source.name}</li>
      ))}
    </ul>
  );
};

export default SourcesList;
