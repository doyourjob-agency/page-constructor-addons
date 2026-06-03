import type {RefObject} from 'react';
import React from 'react';

import ReactDOM from 'react-dom';

import {FocusTrap} from '../../../../utils/FocusTrap';
import {block} from '../../../../utils/cn';

import './NHNavigationPopup.scss';

const b = block('nh-navigation-popup');

interface NavigationPopupProps {
    headerRef?: RefObject<HTMLDivElement>;
    children: React.ReactNode;
    id?: string;
}

export const NHNavigationPopup = ({headerRef, children, id}: NavigationPopupProps) => {
    return headerRef?.current
        ? ReactDOM.createPortal(
              <FocusTrap enabled>
                  <div
                      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                      tabIndex={0}
                      className={b()}
                      id={id}
                  >
                      {children}
                  </div>
              </FocusTrap>,
              headerRef.current,
          )
        : null;
};
