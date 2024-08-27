import React, { useContext } from 'react';
import { block } from '../../../../utils/cn';
import { MobileContext } from '../../contexts/mobile';
import i18n from './i18n';
import './Logo.css';
const b = block('logo');
const Logo = ({ href = '/', src, className, imageClassName, title, text, alt, width, }) => {
    const isMobile = useContext(MobileContext);
    return (React.createElement("a", { href: href, className: b({ mobile: isMobile }, className), title: title || i18n('link-title'), style: width ? { width } : {} },
        src && (React.createElement("img", { className: b('img', imageClassName), alt: alt || i18n('image-alt'), src: src })),
        text && React.createElement("span", { className: b('text') }, text)));
};
export default Logo;
