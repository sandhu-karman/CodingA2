import { Meta, StoryFn } from '@storybook/react';
import { RadioButton } from './Radio Button';
import { RadioButtonProps } from './Radio Button.types';

export default {
  title: 'RadioButton',
  component: RadioButton,
} as Meta<typeof RadioButton>;

const Template: StoryFn<RadioButtonProps> = (args: RadioButtonProps) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Option 1',
  name: 'example',
  value: 'option1',
  checked: false,
};
