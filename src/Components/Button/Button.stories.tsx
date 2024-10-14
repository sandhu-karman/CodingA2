import { Meta, StoryFn } from '@storybook/react'; // Import StoryFn instead of Story
import Button, { ButtonProps } from './Button';

// Define metadata for your Button stories
export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

// Template for the Button story
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />; // Use StoryFn

// Define different variants of your Button story
export const Default = Template.bind({});
Default.args = {
  label: 'Default Button',
  onClick: () => alert('Button clicked!'),
  disabled: false,
  $primary: false,
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Primary Button clicked!'),
  disabled: false,
  $primary: true,
};
