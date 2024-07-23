import { Header } from '../../components/layouts/Header.js';
import { Footer } from '../../components/layouts/Footer.js';
import Cards from '../../components/modules/card/Cards.js';
import JoDOM from '../../../core/dom/JoDOM.js';
import Option from '../../components/modules/form/select/option.js';

export class Events extends JoDOM.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            categories: [],
            category: null,
        };
    }

    componentDidMount() {
        fetch('https://api-esgi.faispaschier.fr/events/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ events: data }));

        // get all categories
        fetch('https://api-esgi.faispaschier.fr/categories/', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => this.setState({ categories: data }));
    }

    handleSelectEventWithCategory = (value) => {
        let url;

        if (value === 'category') {
            url = 'https://api-esgi.faispaschier.fr/events';
        } else {
            url = `https://api-esgi.faispaschier.fr/events?category=${value}`;
        }

        fetch(url, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ events: data, category: value });
            });
    };

    render() {
        const { events, categories, category: c } = this.state;
        return {
            type: 'div',
            children: [
                JoDOM.createElement(Header),
                {
                    type: 'main',
                    children: [
                        {
                            type: 'div',
                            props: {
                                class: 'input-events',
                            },
                            children: [
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
                                            events: {
                                                change: [
                                                    (event) => {
                                                        const { value } =
                                                            event.target;
                                                        this.handleSelectEventWithCategory(
                                                            value,
                                                        );
                                                    },
                                                ],
                                            },
                                            children: [
                                                {
                                                    type: 'option',
                                                    props: {
                                                        value: 'category',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'TEXT_NODE',
                                                            content: 'category',
                                                        },
                                                    ],
                                                },
                                                ...categories.map(
                                                    (category, index) =>
                                                        c === category.name
                                                            ? JoDOM.createElement(
                                                                  Option,
                                                                  {
                                                                      key: index,
                                                                      value: category.name,
                                                                      selected:
                                                                          'selected',
                                                                      children:
                                                                          category.name,
                                                                  },
                                                              )
                                                            : JoDOM.createElement(
                                                                  Option,
                                                                  {
                                                                      key: index,
                                                                      value: category.name,
                                                                      children:
                                                                          category.name,
                                                                  },
                                                              ),
                                                ),
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'section',
                            props: {
                                class: 'card-list',
                            },
                            children: [
                                {
                                    type: 'ul',
                                    props: {
                                        class: 'cards',
                                    },
                                    children: events.map((event, index) =>
                                        JoDOM.createElement(
                                            Cards,
                                            { key: index, ...event },
                                            [],
                                        ),
                                    ),
                                },
                            ],
                        },
                    ],
                },
                Footer,
            ],
        };
    }
}