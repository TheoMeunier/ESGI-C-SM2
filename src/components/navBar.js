import { BrowserLink } from '../components/BrowerRouter.js';

export const NavBar = {
    type: 'nav',
    children: [
        {
            type: 'ul',
            children: [
                {
                    type: 'li',
                    children: [
                        BrowserLink({
                            title: 'home',
                            to: '/',
                        }),
                    ],
                },
                {
                    type: 'li',
                    children: [
                        BrowserLink({
                            title: 'event',
                            to: '/events',
                        }),
                    ],
                },
                {
                    type: 'li',
                    children: [
                        BrowserLink({
                            title: 'contact',
                            to: '/contact',
                        }),
                    ],
                },
            ],
        }],
};
