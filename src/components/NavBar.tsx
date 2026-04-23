import { HStack, Image, Select } from "@chakra-ui/react";
import logo from "../assets/logo.jpg";
import ColorModeSwitch from "./ColorModeSwitch";

interface NavBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const NavBar = ({ selectedCategory, onSelectCategory }: NavBarProps) => {
  const categories = [
    { id: 0, name: "top", label: "Destacadas" },
    { id: 1, name: "breaking", label: "Última hora" },
    { id: 2, name: "world", label: "Internacionales" },
    { id: 3, name: "domestic", label: "Nacionales" },
    { id: 4, name: "politics", label: "Política" },
    { id: 5, name: "business", label: "Negocios" },
    { id: 6, name: "technology", label: "Tecnología" },
    { id: 7, name: "sports", label: "Deportes" },
    { id: 8, name: "entertainment", label: "Entretenimiento" },
    { id: 9, name: "health", label: "Salud" },
    { id: 10, name: "science", label: "Ciencia" },
    { id: 11, name: "environment", label: "Ambiente" },
    { id: 12, name: "education", label: "Educación" },
    { id: 13, name: "lifestyle", label: "Estilo de vida" },
    { id: 14, name: "tourism", label: "Turismo" },
    { id: 15, name: "food", label: "Comida" },
    { id: 16, name: "other", label: "Otras" },
    { id: 17, name: "crime", label: "Crimen" },
  ];

  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
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
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
