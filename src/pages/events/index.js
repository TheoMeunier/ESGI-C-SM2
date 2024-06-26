import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { Leaflet } from '../../components/leaflet/leaflet.js';
import { FormFilter } from '../../components/form/formFilter.js';

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
                    type: 'div',
                    props: {
                        id: 'map',
                    },
                    children: [],
                },
            ],
        },
        Footer,
    ],
    events: {
        mounted: [
            async function (element) {
                await Leaflet();
            }
        ],
    },
};
