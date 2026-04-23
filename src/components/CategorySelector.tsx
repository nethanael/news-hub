import { Select } from "@chakra-ui/react";
import categories from "../services/NewsCategories";

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategorySelector = ({
  selectedCategory,
  onSelectCategory,
}: CategorySelectorProps) => {
  return (
    <Select
      placeholder="Seleccione categoría"
      value={selectedCategory}
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      {categories.map((cat) => (
        <option key={cat.id} value={cat.name}>
          {cat.label}
        </option>
      ))}
    </Select>
  );
};

export default CategorySelector;
