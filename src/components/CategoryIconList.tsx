import { NewsArticle } from "../hooks/useNews";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaClinicMedical,
  FaBong,
  FaChartLine,
  FaCompass,
  FaCouch,
  FaFilm,
  FaFutbol,
  FaGuitar,
  FaMale,
  FaMicrochip,
  FaBook,
  FaCloudSunRain,
  FaMoneyCheckAlt,
  FaAngleUp,
  FaLandmark,
  FaPlane,
  FaHamburger,
  FaUserSecret,
  FaPagelines,
} from "react-icons/fa";

interface IconProps {
  newsArticle: NewsArticle;
}

const CategoryIconList = ({ newsArticle }: IconProps) => {
  const iconMap: { [key: string]: IconType } = {
    health: FaClinicMedical,
    business: FaMoneyCheckAlt,
    technology: FaMicrochip,
    entertainment: FaFilm,
    top: FaChartLine,
    science: FaBong,
    environment: FaCloudSunRain,
    lifestyle: FaGuitar,
    breaking: FaAngleUp,
    crime: FaUserSecret,
    domestic: FaCouch,
    education: FaBook,
    food: FaHamburger,
    other: FaMale,
    politics: FaLandmark,
    sports: FaFutbol,
    tourism: FaPlane,
    world: FaCompass,
  };

  return (
    <HStack marginY={1}>
      {newsArticle.category.map((cat) => (
        <Icon as={iconMap[cat]} color="gray.500" key={cat} />
      ))}
    </HStack>
  );
};
export default CategoryIconList;
