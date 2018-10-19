import React from "react";
import ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// class MyComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoaded: false,
//             items: []
//         };
//     }
//
//
//     componentDidMount() {
//         fetch("https://localhost:3000")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     console.log('result', result);
//                     this.setState({
//                         isLoaded: true,
//                         items: result.items
//                     });
//                 },
//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     this.setState({
//                         isLoaded: true,
//                         error
//                     });
//                 }
//             )
//     }
//
//     render() {
//         const { error, isLoaded, items } = this.state;
//         if (error) {
//             return <div>Error: {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Loading...</div>;
//         } else {
//             return (
//                 <ul>
//                     {items.map(item => (
//                         <li key={item.name}>
//                             {item.name} {item.price}
//                         </li>
//                     ))}
//                 </ul>
//             );
//         }
//     }
// }




// const Index = () => {
//     return <table className="table">
//         <thead className="thead-dark">
//         <tr>
//             <th scope="col">Name</th>
//             <th scope="col">Email</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Address</th>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//             <th scope="row">1</th>
//             <td>Mark</td>
//             <td>Otto</td>
//             <td>@mdo</td>
//         </tr>
//         <tr>
//             <th scope="row">2</th>
//             <td>Jacob</td>
//             <td>Thornton</td>
//             <td>@fat</td>
//         </tr>
//         <tr>
//             <th scope="row">3</th>
//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//         </tr>
//         </tbody>
//     </table>;
// };
//
// ReactDOM.render(<Index/>, document.getElementById("index"));