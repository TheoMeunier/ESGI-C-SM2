import { Cards } from '../section/cards.js';
import './../../../assets/js/components/carousel.js';

export const evenementList = {
    type: 'section',
    props: {
        class: 'evenement-container',
    },
    children: [
        {
            type: 'h2',
            children: [
                {
                    type: 'TEXT_NODE',
                    content: 'EVENEMENT',
                },
            ],
        },
        {
            type: 'div',
            props: {
                class: 'carousel-container',
            },
            children: [
                {
                    type: 'ul',
                    props: {
                        class: 'carousel-row',
                    },
                    children: [Cards, Cards, Cards, Cards, Cards, Cards],
                },
            ],
        },
    ],
};
