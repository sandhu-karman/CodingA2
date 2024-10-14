import { Meta, StoryFn } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<DropdownProps> = (args: DropdownProps) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Select an option',
  options: ['Option 1', 'Option 2', 'Option 3'],
  onSelect: (value: string) => alert(`Selected: ${value}`),
};
