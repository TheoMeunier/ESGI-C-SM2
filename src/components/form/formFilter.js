export const FormFilter = {
    type: 'form',
    props: {
        class: 'form-contact',
    },
    children: [
        {
            type: 'div',
            props: {
                class: 'form-row',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'form-group',
                    },
                    children: [
                        {
                            type: 'label',
                            props: {
                                for: 'search',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Recherche',
                                },
                            ],
                        },
                        {
                            type: 'input',
                            props: {
                                type: 'text',
                                id: 'search',
                                name: 'search',
                                required: true,
                            },
                            children: [],
                        },
                    ],
                },
                {
                    type: 'div',
                    props: {
                        class: 'form-group',
                    },
                    children: [
                        {
                            type: 'label',
                            props: {
                                for: 'type',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Type',
                                },
                            ],
                        },
                        {
                            type: 'select',
                            props: {
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
                    ],
                },
                {
                    type: 'div',
                    props: {
                        class: 'form-group',
                    },
                    children: [
                        {
                            type: 'label',
                            props: {
                                for: 'city',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Ville',
                                },
                            ],
                        },
                        {
                            type: 'select',
                            props: {
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
        },
    ],
};
