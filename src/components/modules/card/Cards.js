import JoDOM from '../../../../core/dom/JoDOM.js';
export default class Cards extends JoDOM.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.validateProps({
            id: 'number',
            title: 'string',
            description: 'string',
            category: 'object',
            startDate: 'string',
            image: 'string',
        });
    }

    render() {
        const { title, description, category, startDate, id, image } =
            this.props;
        return {
            type: 'li',
            props: {
                class: 'card',
            },
            children: [
                {
                    type: 'a',
                    props: {
                        href: `/events/${id}`,
                    },
                    events: {
                        click: [
                            function (event) {
                                event.preventDefault();
                                history.pushState(null, null, `/events/${id}`);
                            },
                        ],
                    },
                    children: [
                        {
                            type: 'img',
                            props: {
                                src: image + `?random=${id}`,
                                alt: '',
                                loading: 'lazy',
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
                                            content: category.name,
                                        },
                                    ],
                                },
                                {
                                    type: 'h3',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: title,
                                        },
                                    ],
                                },
                                {
                                    type: 'p',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: description,
                                        },
                                    ],
                                },
                                {
                                    type: 'time',
                                    children: [
                                        {
                                            type: 'TEXT_NODE',
                                            content: new Date(
                                                startDate,
                                            ).toLocaleDateString(),
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        };
    }
}
