import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import type {HeaderStripeProps} from '../HeaderStripe';
import {HeaderStripe} from '../HeaderStripe';

import data from './data.json';

export default {
    component: HeaderStripe,
    title: 'Components/HeaderStripe',
} as Meta;

const DefaultTemplate: StoryFn<HeaderStripeProps> = (args) => {
    return (
        <div style={{margin: '30px'}}>
            <HeaderStripe {...args} />
        </div>
    );
};

export const Default = DefaultTemplate.bind({});

Default.args = data.default as HeaderStripeProps;

const CustomColorsTemplate: StoryFn<HeaderStripeProps> = (args) => {
    return (
        <div style={{margin: '30px'}}>
            <HeaderStripe {...args} />
        </div>
    );
};

export const CustomColors = CustomColorsTemplate.bind({});

CustomColors.args = {
    ...data.default,
    background:
        'linear-gradient(90deg,rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)',
    textColor: '#fff',
} as HeaderStripeProps;

const SingleItemTemplate: StoryFn<HeaderStripeProps> = (args) => {
    return (
        <div style={{margin: '30px'}}>
            <HeaderStripe {...args} />
        </div>
    );
};

export const SingleItem = SingleItemTemplate.bind({});

SingleItem.args = data.singleItem as HeaderStripeProps;
