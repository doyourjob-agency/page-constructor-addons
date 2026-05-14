import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {NewHeader, NewHeaderProps} from '../NewHeader';

import data from './data.json';

export default {
    component: NewHeader,
    title: 'Navigation/NewHeader',
} as Meta;

const DefaultTemplate: StoryFn<NewHeaderProps> = (args) => <NewHeader {...args} />;

export const Default = DefaultTemplate.bind({});

Default.args = data.default as NewHeaderProps;
