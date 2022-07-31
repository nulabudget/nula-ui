import React from "react";

import Box from "./";

export default {
  title: "UI/Box",
  component: Box,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Box {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium iure facere odit atque aperiam reiciendis molestiae voluptate nulla ratione corporis consequuntur totam explicabo, dolorum ut. Perspiciatis fugiat dolore hic saepe.",
};
