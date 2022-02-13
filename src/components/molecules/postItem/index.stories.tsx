import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import data from '../../../postData.json';

import PostItem from './';

export const basicPostItem = () => <PostItem data={data} />;

export default {
  component: PostItem,
  decorators: [withKnobs],
  title: 'molecules/PostItem',
};
