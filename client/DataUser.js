import React, {Component} from 'react';

class DataUser extends Component {
    constructor() {
        super()

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        // ajax call
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then((json) => {
                console.log('json', json);
                this.setState({
                    users: json.result
                })
            })
    }

    renderUsers(item, index) {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.address}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                </tr>
                </thead>
                <tbody>
                {this.state.users.map(this.renderUsers)}
                </tbody>
            </table>
        );
    }
}

export default DataUser;