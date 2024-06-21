import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';

export const Home = {
    type: 'div',
    children: [
        Header,
        {
            type: 'section',
            props: {
                class: 'banner flex flex-around',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'banner-text',
                    },
                    children: [
                        {
                            type: 'h1',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content:
                                        'OÙ TROUVER LE SPOT DONT VOUS RÊVEZ ?',
                                },
                            ],
                        },
                        {
                            type: 'p',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content:
                                        'Paris 2024 sera marqué par une multitude de sites emblématiques répartis dans toute la ville et ses environs. Voici quelques lieux incontournables où vous pourrez trouver le spot de vos rêve.',
                                },
                            ],
                        },
                        {
                            type: 'button',
                            props: {
                                class: 'button-blue',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'EN SAVOIR PLUS',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'div',
                    props: {
                        class: 'banner-image',
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: '../../assets/images/mascotte-home.png',
                                alt: 'Paris 2024 Mascot',
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: 'section',
            props: {
                class: 'event-section',
            },
            children: [
                {
                    type: 'h2',
                    props: {
                        class: 'nouvel-element',
                    },
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'EVENEMENTS',
                        },
                    ],
                },
                {
                    type: 'div',
                    props: {
                        class: 'card',
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: '../../assets/images/Rectangle 23.png',
                            },
                        },
                        {
                            type: 'div',
                            props: {
                                class: 'content',
                            },
                            children: [
                                {
                                    type: 'div',
                                    props: {
                                        class: 'pill',
                                    },
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: 'Texte du pill',
                                        },
                                    ],
                                },
                                {
                                    type: 'h3',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: 'Titre de la carte',
                                        },
                                    ],
                                },
                                {
                                    type: 'p',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: 'Description de la carte',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            type: 'section',
            props: {
                class: 'amuse-section flex flex-around',
            },
            children: [
                {
                    type: 'div',
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: '../../assets/images/Rectangle 23.png',
                                alt: '',
                            },
                        },
                    ],
                },
                {
                    type: 'div',
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
                        {
                            type: 'button',
                            props: {
                                class: 'button-blue',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'EN SAVOIR PLUS',
                                },
                            ],
                        },
                    ],
                },
            ],
        },

        Footer,
    ],
};
