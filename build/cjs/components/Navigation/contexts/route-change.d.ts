import React from 'react';
export type RouteChangeHandlerContextProps = (handler: () => void) => void;
export declare const RouteChangeHandlerContext: React.Context<RouteChangeHandlerContextProps | undefined>;
