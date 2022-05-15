import { Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import ProjectCard from "../../components/ProjectCard";

import { useFetchProjectList } from "../../customHooks/useFetchProjectList";

const Projects: FC = () => {
  const projectList = useFetchProjectList();

  const PageContent = () => {
    if (projectList.length === 0) {
      return <Heading>No Projects.</Heading>;
    }
    return (
      <VStack>
        {projectList.map((project, index) => (
          <ProjectCard key={index} title={project.title} />
        ))}
      </VStack>
    );
  };

  return <PageContent />;
};

export default Projects;
