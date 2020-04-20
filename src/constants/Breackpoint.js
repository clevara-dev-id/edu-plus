import { layoutGenerator } from 'react-break';

const layout = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 992,
});
export const OnMobile = layout.isAtMost('mobile');
export const OnTablet = layout.isAtMost('tablet');
export const OnDesktop = layout.is('desktop');