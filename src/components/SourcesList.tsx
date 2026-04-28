import {
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useSources from "../hooks/useSources";

const SourcesList = () => {
  const { data, isLoading, error } = useSources();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Fuentes:
      </Heading>
      <List>
        {data.map((source) => (
          <ListItem key={source.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={source.icon}
                objectFit="cover"
              ></Image>
              <Text fontSize="lg" textAlign="left">
                {source.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SourcesList;
