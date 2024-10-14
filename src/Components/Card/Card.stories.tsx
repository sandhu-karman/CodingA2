import { Meta, StoryFn } from '@storybook/react';
import { Card } from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Card',
  component: Card,
} as Meta<typeof Card>;

const Template: StoryFn<CardProps> = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Card',
  content: 'This is a default card with basic styling.',
};

export const WithBackground = Template.bind({});
WithBackground.args = {
  title: 'Styled Card',
  content: 'This card has a custom background color.',
  backgroundColor: '#f0f0f0',
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  title: 'Wide Card',
  content: 'This card has a custom width of 500px.',
  width: '500px',
};
