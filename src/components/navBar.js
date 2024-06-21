import { BrowserLink } from './BrowserRouter.js';

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
