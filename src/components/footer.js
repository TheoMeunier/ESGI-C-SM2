export const Footer = {
    type: 'footer',
    children: [
        {
            type: 'img',
            props: {
                src: '../../assets/images/icons/logo_footer.svg',
                alt: 'logo-footer',
                class: 'logo-footer',
            },
        },
        {
            type: 'p',
            children: [
                {
                    type: 'TEXT_NODE',
                    content: 'copyright @2024',
                },
            ],
        },
        {
            type: 'ul',
            children: [
                {
                    type: 'li',
                    children: [
                        {
                            type: 'a',
                            props: {
                                href: 'https://www.facebook.com/',
                            },
                            children: [
                                {
                                    type: 'img',
                                    props: {
                                        src: '../../assets/images/icons/facebook.svg',
                                        alt: 'facebook',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'li',
                    children: [
                        {
                            type: 'a',
                            props: {
                                href: 'https://www.instagram.com/',
                            },
                            children: [
                                {
                                    type: 'img',
                                    props: {
                                        src: '../../assets/images/icons/instagram.svg',
                                        alt: 'instagram',
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'li',
                    children: [
                        {
                            type: 'a',
                            props: {
                                href: 'https://www.twitter.com/',
                            },
                            children: [
                                {
                                    type: 'img',
                                    props: {
                                        src: '../../assets/images/icons/twitter.svg',
                                        alt: 'twitter',
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
};
