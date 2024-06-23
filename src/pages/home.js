import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { HeroHome } from '../components/home/heroHome.js';
import { evenementList } from '../components/home/evenementList.js';

export const Home = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            children: [HeroHome, evenementList],
        },
        Footer,
    ],
};
