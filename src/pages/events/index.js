import { Header } from '../../components/header.js';
import { Footer } from '../../components/footer.js';
import { Leaflet } from '../../components/leaflet/leaflet.js';

export const Events = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            children: [
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
                    events: {
                        click: [
                            function (event) {
                                Leaflet(event);
                            }
                        ]
                    },
                    children: [],
                },
            ],
        },
        Footer
    ],
};
