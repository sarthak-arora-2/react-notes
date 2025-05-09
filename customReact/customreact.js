function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)  // contains which html tag it is.
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;  // if properties have children then just ignore it.
        domElement.setAttribute(prop, reactElement.props[prop])  // e.g. prop='href', reactElement.props[prop]='https://google.com'
    }
    container.appendChild(domElement)
}

// Whatever html we want to add inside the mainContainer first gets converted into a DOM tree like below by babel:
// reactElement is a hyperlink tag(<a>) having properties href and target and innerHTML as children.
// This format is not the official format in which html gets converted its just for some understanding.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')  // the div inside which we need to insert the reactElement(HTML) or we can say the elements we want to include inside this div.

customRender(reactElement, mainContainer)  // A custom function that renders the reactElement onto the div.