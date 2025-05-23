import React, { useMemo } from 'react';
import { Title } from '@doyourjob/gravity-ui-page-constructor';
export const PopupTitle = ({ title, url, className }) => {
    const titleProps = useMemo(() => {
        return title
            ? {
                text: title,
                textSize: 'xs',
                url: url,
            }
            : undefined;
    }, [title, url]);
    return React.createElement(Title, { title: titleProps, className: className });
};
