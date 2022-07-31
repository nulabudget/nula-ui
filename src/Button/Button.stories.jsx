import React from "react";

import Button from "./";

export default {
  title: "UI/Button",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (

    <Button {...args} />

);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Submit",
  fluid: false,
  type: 'submit'
};
