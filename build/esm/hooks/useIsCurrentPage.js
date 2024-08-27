import React, { useEffect } from 'react';
export const useIsCurrentPage = (url) => {
    const [isCurrentPage, setIsCurrentPage] = React.useState(false);
    useEffect(() => {
        setIsCurrentPage(Boolean(url && location.href.includes(url)));
    }, [url]);
    return isCurrentPage;
};
