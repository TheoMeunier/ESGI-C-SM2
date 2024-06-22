import { Contact } from './pages/contact.js';
import { Home } from './pages/home.js';
import { Events } from './pages/events/index.js';

export const routes = {
    '*': Home,
    '/': Home,
    '/events': Events,
    '/events/:id': Events,
    '/contact': Contact,
};
