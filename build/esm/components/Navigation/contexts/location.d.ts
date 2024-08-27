import React from 'react';
export type LocationContextProps = {
    search?: string;
    hash?: string;
    pathname?: string;
    hostname?: string;
    asPath?: string;
};
export declare const LocationContext: React.Context<LocationContextProps>;
