import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
import { formContact } from '../components/form/formContact.js';

export const Contact = {
    type: 'div',
    children: [
        Header,
        {
            type: 'main',
            children: [
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
