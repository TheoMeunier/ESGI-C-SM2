import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { formContact } from '../components/form/formContact.js';

export const Contact = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            props: {
                class: 'contact-main',
            },
            children: [
                {
                    type: 'div',
                    props: {
                        class: 'contact-header',
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: '../../assets/images/mascotte-contact.png',
                                alt: 'Mascotte JO 2024',
                                class: 'mascotte-contact',
                            },
                        },
                        {
                            type: 'h1',
                            props: {
                                class: 'contact-title',
                            },
                            children: [
                                {
                                    type: 'TEXT_NODE',
                                    content: 'Contact',
                                },
                            ],
                        },
                    ],
                },
                {
                    type: 'section',
                    props: {
                        class: 'contact-info',
                    },
                    children: [formContact],
                },
            ],
        },
        Footer,
    ],
};
