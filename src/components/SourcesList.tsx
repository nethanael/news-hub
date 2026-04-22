import {
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useSources from "../hooks/useSources";

const SourcesList = () => {
  const { data } = useSources();
  return (
    <List>
      {data.map((source) => (
        <ListItem key={source.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={source.icon}></Image>
            <Text fontSize="lg">{source.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default SourcesList;
