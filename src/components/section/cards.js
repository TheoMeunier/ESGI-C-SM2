export const Cards = {
    type: 'li',
    props: {
        class: 'card',
    },
    children: [
        {
            type: 'a',
            props: {
                href: '/events/:1',
            },
            events: {
                click: [
                    function (event) {
                        event.preventDefault();
                        history.pushState(null, null, '/events/:1');
                    },
                ],
            },
            children: [
                {
                    type: 'img',
                    props: {
                        src: '../../../assets/images/paris.png',
                        alt: '',
                    },
                },
                {
                    type: 'div',
                    props: {
                        class: 'content',
                    },
                    children: [
                        {
                            type: 'span',
                            props: {
                                class: 'pill',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'FootBall',
                                },
                            ],
                        },
                        {
                            type: 'h3',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Evenement 1',
                                },
                            ],
                        },
                        {
                            type: 'p',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content:
                                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien at nunc.',
                                },
                            ],
                        },
                        {
                            type: 'time',
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: '12/12/2021',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
