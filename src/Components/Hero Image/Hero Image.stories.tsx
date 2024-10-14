import { Meta, StoryFn } from '@storybook/react';
import { HeroImage } from './Hero Image';
import { HeroImageProps } from './Hero Image.types';

export default {
  title: 'HeroImage',
  component: HeroImage,
} as Meta<typeof HeroImage>;

const Template: StoryFn<HeroImageProps> = (args: HeroImageProps) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x400',
  alt: 'A beautiful scenery',
};
