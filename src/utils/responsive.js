import { Responsive } from 'semantic-ui-react';
import { scroller } from 'react-scroll';

export const getWidth = () => {
    const isSSR = typeof window === 'undefined';

    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
}

export const handleScrollTo = (elementName) => {
    scroller.scrollTo(elementName, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
    });
}