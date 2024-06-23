import BrowserRouter from '../src/components/BrowserRouter.js';
import type_check from './typeCheck.js';
const JoDOM = {
    render: function (rootElement, routes) {
        BrowserRouter.bind(this)(routes, rootElement);
    },

    renderStructure: function generateDom(structure) {
        let element;

        if (typeof structure.type === 'string') {
            if (structure.type === 'TEXT_NODE') {
                return document.createTextNode(structure.content);
            }

            element = document.createElement(structure.type);
        }

        if (structure.props) {
            for (const propName in structure.props) {
                if (
                    !type_check(
                        structure.props[propName],
                        typeof structure.props[propName],
                    )
                ) {
                    console.warn(`Invalid type for prop "${propName}"`);
                }
                if (propName === 'style') {
                    Object.assign(element.style, structure.props[propName]);
                } else if (propName.startsWith('data-')) {
                    element.dataset[propName.replace('data-', '')] =
                        structure.props[propName];
                } else {
                    element.setAttribute(propName, structure.props[propName]);
                }
            }
        }

        if (structure.events) {
            console.log(structure.events);
            for (const eventName in structure.events) {
                console.log(eventName);
                for (const eventListeners of structure.events[eventName]) {
                    console.log(eventListeners);
                    element.addEventListener(eventName, eventListeners);
                }
            }
        }

        if (structure.children) {
            for (const child of structure.children) {
                element.appendChild(this.renderStructure(child));
            }
        }
        return element;
    },
};

export default JoDOM;
