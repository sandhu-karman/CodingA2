import { Meta, StoryFn } from '@storybook/react';
import { Label } from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Label',
  component: Label,
} as Meta<typeof Label>;

// Template using StoryFn and explicit typing for args
const Template: StoryFn<LabelProps> = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label Text',
};

export const LargeLabel = Template.bind({});
LargeLabel.args = {
  text: 'Large Label',
};
