import React from 'react';

import {Meta, StoryFn} from '@storybook/react';

import {Header, HeaderProps} from '../containers/Header';

import {DummySearch} from './DummySearch/DummySearch';

import data from './data.json';

export default {
    component: Header,
    title: 'Navigation/Header',
} as Meta;

const renderDummySearch: HeaderProps['renderSearch'] = (props) => <DummySearch {...props} />;

const DefaultTemplate: StoryFn<HeaderProps> = (args, context) => (
    <Header
        {...args}
        isMobile={context.globals.platform === 'mobile'}
        theme={context.globals.theme}
        renderSearch={renderDummySearch}
    />
);

export const Default = DefaultTemplate.bind({});

Default.args = data.default as HeaderProps;

const ScrollOffsetTemplate: StoryFn<HeaderProps> = (args, context) => (
    <div style={{height: '3000px', background: '#f0f0f0'}}>
        <div style={{position: 'fixed', top: 0, width: '100%'}}>
            <Header
                {...args}
                isMobile={context.globals.platform === 'mobile'}
                theme={context.globals.theme}
                renderSearch={renderDummySearch}
            />
        </div>
    </div>
);

export const ScrollOffset = ScrollOffsetTemplate.bind({});

ScrollOffset.args = {...data.default, scrollOffset: 100} as HeaderProps;
