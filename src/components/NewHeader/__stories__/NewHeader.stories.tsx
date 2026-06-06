import React from 'react';

import {HeaderStockContext} from '@doyourjob/gravity-ui-page-constructor';
import {Meta, StoryFn} from '@storybook/react';

import {NewHeader, NewHeaderProps} from '../NewHeader';

import data from './data.json';

export default {
    component: NewHeader,
    title: 'Navigation/NewHeader',
} as Meta;

const DefaultTemplate: StoryFn<NewHeaderProps> = (args) => (
    <HeaderStockContext.Provider
        value={{
            price: {
                name: 'XXXXXX: Xxxxxx Xxxxx',
                percent: '5.62 (14.25 %)',
                price: '$ 45.01',
                update: 'Last update: Jun 5, 2025',
                delayed: 'All prices at least 15 minutes delayed',
            },
        }}
    >
        <NewHeader {...args} />
    </HeaderStockContext.Provider>
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default as NewHeaderProps;
