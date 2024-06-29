export const FormFilter = {
    type: 'div',
    props: {
        class: 'input-events',
    },
    children: [
        {
            type: 'div',
            props: {
                class: 'input-search-container',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'input-icon-wrapper',
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: '/assets/images/icons/search.svg',
                                alt: 'Search Icon',
                                class: 'search-icon',
                            },
                        },
                        {
                            type: 'input',
                            props: {
                                type: 'text',
                                class: 'input-search',
                                id: 'search',
                                name: 'search',
                                placeholder: 'Recherche',
                                required: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            type: 'div',
            props: {
                class: 'input-select-container',
            },
            children: [
                {
                    type: 'select',
                    props: {
                        class: 'input-select',
                        id: 'type',
                        name: 'type',
                    },
                    children: [
                        {
                            type: 'option',
                            props: {
                                value: 'all',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Tous',
                                },
                            ],
                        },
                        {
                            type: 'option',
                            props: {
                                value: 'restaurant',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Restaurant',
                                },
                            ],
                        },
                        {
                            type: 'option',
                            props: {
                                value: 'hotel',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Hotel',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'select',
                    props: {
                        class: 'input-select',
                        id: 'city',
                        name: 'city',
                    },
                    children: [
                        {
                            type: 'option',
                            props: {
                                value: 'all',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Toutes',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
