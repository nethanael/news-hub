import { Select } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Select placeholder="Ordenar por">
      <option>Fecha</option>
      <option>Relevancia</option>
      <option>Fuente</option>
    </Select>
  );
};

export default SortSelector;
