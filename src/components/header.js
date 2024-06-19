import { NavBar } from './navBar.js';

export const Header = {
    type: 'header',
    children: [
        {
            type: 'img',
            props: {
                src: '../../assets/images/icons/logo.svg',
                alt: 'logo',
            },
        },
        NavBar,
    ],
};