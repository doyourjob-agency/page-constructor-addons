import React, { useMemo } from 'react';
import { Title } from '@gravity-ui/page-constructor';
export const LargeGroupPopupTitle = ({ title, url, className, }) => {
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
