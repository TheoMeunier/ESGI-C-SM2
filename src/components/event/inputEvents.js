export const inputEvents = {
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
                                src: '../../../assets/images/icons/search.svg',
                                class: 'search-icon',
                                alt: 'Search Icon',
                            },
                        },
                        {
                            type: 'input',
                            props: {
                                type: 'text',
                                placeholder: 'Rechercher un événement',
                                class: 'input-search',
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
                        placeholder: 'Selecteur',
                        id: 'select1',
                    },
                    children: [],
                },
                {
                    type: 'select',
                    props: {
                        class: 'input-select',
                        placeholder: 'Selecteur',
                        id: 'select2',
                    },
                    children: [],
                },
            ],
        },
    ],
};
