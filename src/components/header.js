import { LogoHome } from './BrowserRouter.js';
import { NavBar } from './navBar.js';

export const Header = {
    type: 'header',
    children: [LogoHome({ to: '/', title: 'Home' }), NavBar],
};
