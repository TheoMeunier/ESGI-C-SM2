export const formContact = {
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
                                for: 'name',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Name',
                                },
                            ],
                        },
                        {
                            type: 'input',
                            props: {
                                type: 'text',
                                id: 'name',
                                name: 'name',
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
                                for: 'email',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Email',
                                },
                            ],
                        },
                        {
                            type: 'input',
                            props: {
                                type: 'email',
                                id: 'email',
                                name: 'email',
                                required: true,
                            },
                            children: [],
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
                        for: 'message',
                    },
                    children: [
                        {
                            type: 'TEXT_NODE',
                            content: 'Message',
                        },
                    ],
                },
                {
                    type: 'textarea',
                    props: {
                        id: 'message',
                        name: 'message',
                        required: true,
                    },
                    children: [],
                },
            ],
        },
        {
            type: 'button',
            props: {
                type: 'submit',
                class: 'cta',
            },
            children: [
                {
                    type: 'TEXT_NODE',
                    content: 'Submit',
                },
            ],
        },
    ],
};
