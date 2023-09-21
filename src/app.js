/* @jsx createElement */
import { Component, createDOM, createElement, render } from "./react";

// const vdom = {
//     tag: 'p',
//     props: {},
//     children: [
//         {
//             tag: 'h1',
//             props: {},
//             children: ["React 만들기"],
//         },
//         {
//             tag: 'ul',
//             props: {},
//             children: [
//                 {
//                     tag: 'li',
//                     props: {
//                         style: "color:red",
//                     },
//                     children: ['첫 번째 아이템']
//                 },
//                 {
//                     tag: 'li',
//                     props: {
//                         style: "color:blue",
//                     },
//                     children: ['두 번째 아이템']
//                 },
//                 {
//                     tag: 'li',
//                     props: {
//                         style: "color:green",
//                     },
//                     children: ['세 번째 아이템']
//                 },
//             ],
//         },
//     ],
// };

// const vdom = createElement('p', {}, 
//     createElement('h1', {}, "React 만들기"),
//     createElement('ul', {}, 
//         createElement('li', { style: "color:red" }, "첫 번째 아이템"),
//         createElement('li', { style: "color:blue" }, "두 번째 아이템"),
//         createElement('li', { style: "color:green" }, "세 번째 아이템"),
//         )
//     );

class Title extends Component {
    render() {
        return <h1>{ this.props.children }</h1>
    }
}

function Title(props) {
    return <h1>{ props.children }</h1>
}

function Item(props) {
    return <li style={`color:${props.color}`}>{props.children</li>
}

const App = () => <p>
    <Title label="React">React 정말 클래스 컴포넌트 잘 만들기</Title>
    <ul>
        <Item color="red">첫 번째 아이템</Item>
        <Item color="blue">두 번째 아이템</li>
        <Item color="green">세 번째 아이템</li>
    </ul>
</p>

render(<App />, document.querySelector('#root'));



