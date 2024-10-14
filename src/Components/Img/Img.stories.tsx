import { Meta, StoryFn } from '@storybook/react';
import { Img } from './Img';
import { ImgProps } from './Img.types';

export default {
  title: 'Image',
  component: Img,
} as Meta<typeof Img>;

const Template: StoryFn<ImgProps> = (args: ImgProps) => <Img {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150',
  alt: 'Placeholder Image',
  width: '150px',
  height: '150px',
};

export const LargeImage = Template.bind({});
LargeImage.args = {
  src: 'https://via.placeholder.com/500',
  alt: 'Large Image',
  width: '500px',
  height: '500px',
};
