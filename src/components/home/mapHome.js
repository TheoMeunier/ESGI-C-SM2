import { Cta } from '../BrowserRouter.js';

export const mapHome = {
    type: 'section',
    props: {
        class: 'amuse-section flex flex-between',
    },
    children: [
        {
            type: 'div',
            children: [
                {
                    type: 'img',
                    props: {
                        src: '../../assets/images/carte-paris.png',
                        alt: '',
                    },
                },
            ],
        },
        {
            type: 'div',
            props: {
                class: 'amuse-content',
            },
            children: [
                {
                    type: 'h2',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'AMUSE DE TOI',
                        },
                    ],
                },
                {
                    type: 'p',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content:
                                "Le judo, littéralement \"voie de la souplesse\", est un art martial d'origine japonaise fondé par Jigoro Kano en 1882. Plus qu'une simple technique de combat, le judo est une discipline qui prône des valeurs d'humilité, de respect et de persévérance. Il s'agit d'un sport complet qui allie technique, force physique et stratégie mentale.",
                        },
                    ],
                },
                Cta({
                    title: 'En savoir plus',
                    to: '/events',
                    props: {
                        class: 'cta',
                    },
                }),
            ],
        },
    ],
};
