import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { FormFilter } from '../../components/form/formFilter.js';
import { Cards } from '../../components/section/cards.js';

export const Events = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            children: [
                FormFilter,
                {
                    type: 'h1',
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'Event',
                        },
                    ],
                },
                {
                    type: 'section',
                    props: {
                        class: 'card-list',
                    },
                    children: [
                        {
                            loop: {
                                count: 12,
                                template: Cards,
                            },
                        },
                    ],
                },
            ],
        },
        Footer,
    ],
};
