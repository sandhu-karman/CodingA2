import { Meta, StoryFn } from '@storybook/react';
import { Text } from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Text',
  component: Text,
} as Meta<typeof Text>;

// Template using StoryFn and explicit typing for args
const Template: StoryFn<TextProps> = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a text block.',
};

export const Highlighted = Template.bind({});
Highlighted.args = {
  content: 'This is highlighted text.',
  highlight: true,
};
