import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useSources from "../hooks/useSources";

const SourcesList = () => {
  const { data, isLoading, error } = useSources();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      <Text fontSize="3xl">Fuentes:</Text>
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
