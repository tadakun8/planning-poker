import { Box, Flex, Heading } from "@chakra-ui/react";

import { Project } from "../../types/model";

type ProjectCardProps = Project;

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Box
      width={"80%"}
      padding={3}
      borderWidth={1}
      borderColor={"green.300"}
      borderRadius={10}
    >
      <Flex justify={"center"} align={"center"}>
        <Heading as={"h4"} size={"lg"}>
          {props.title}
        </Heading>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
