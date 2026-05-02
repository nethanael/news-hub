import { Select } from "@chakra-ui/react";

interface SortSelectorProps {
  selectedOrder: string;
  onSelectOrder: (order: string) => void;
}

const SortSelector = ({ selectedOrder, onSelectOrder }: SortSelectorProps) => {
  const sortOrders = [
    { value: "Pubdateasc", label: "Fecha" },
    //{ value: "Relevancy", label: "Relevancia" },
    { value: "Source", label: "Fuente" },
  ];

  return (
    <Select
      //placeholder="Ordenar por"
      value={selectedOrder}
      onChange={(event) => onSelectOrder(event.target.value)}
    >
      {sortOrders.map((odr) => (
        <option key={odr.value} value={odr.value}>
          {odr.label}
        </option>
      ))}
    </Select>
  );
};

export default SortSelector;
