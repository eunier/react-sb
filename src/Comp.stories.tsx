import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Comp } from "./Comp";

export default {
  title: "Comp",
  component: Comp,
} as ComponentMeta<typeof Comp>;

const Template: ComponentStory<typeof Comp> = (args) => <Comp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "some label",
};
