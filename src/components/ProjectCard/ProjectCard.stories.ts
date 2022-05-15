import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import ProjectCard from "./index";

export default {
  component: ProjectCard,
  title: "ProjectCard",
} as ComponentMeta<typeof ProjectCard>;

export const Default: ComponentStoryObj<typeof ProjectCard> = {
  args: {
    title: "サンプルプロジェクト",
  },
};

export const LongTitle: ComponentStoryObj<typeof ProjectCard> = {
  args: {
    title:
      "サンプルプロジェクトおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおおお",
  },
};
